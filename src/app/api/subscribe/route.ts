import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, source } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "3";

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    // Add to Brevo
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(BREVO_LIST_ID)],
        attributes: {
          SOURCE: source || "deskgearhq",
        },
        updateEnabled: true,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Brevo error:", errorData);
      
      // Handle already subscribed
      if (errorData.code === "duplicate_parameter") {
        return NextResponse.json({ success: true, message: "Already subscribed" });
      }
      
      return NextResponse.json(
        { error: "Failed to subscribe" },
        { status: 500 }
      );
    }

    // Send welcome email
    try {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify({
          sender: { name: "DeskGearHQ", email: "hello@deskgearhq.com" },
          to: [{ email }],
          subject: "Welcome to DeskGearHQ! 🖥️",
          htmlContent: `
            <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2563eb;">Welcome to DeskGearHQ!</h1>
              <p>Thanks for subscribing! You'll now get:</p>
              <ul>
                <li>🎯 Weekly top picks and price drops</li>
                <li>📚 New buying guides and product comparisons</li>
                <li>💡 Desk setup tips and inspiration</li>
              </ul>
              <p>In the meantime, check out our latest guides:</p>
              <p>
                <a href="https://deskgearhq.com/guides/best-standing-desks-2026" style="color: #2563eb;">
                  Best Standing Desks 2026 →
                </a>
              </p>
              <p>
                <a href="https://deskgearhq.com/guides/best-desk-cable-management-2026" style="color: #2563eb;">
                  Best Cable Management 2026 →
                </a>
              </p>
              <p style="margin-top: 24px; color: #666; font-size: 14px;">
                Happy organizing!<br/>
                The DeskGearHQ Team
              </p>
            </div>
          `,
        }),
      });
    } catch (emailError) {
      console.error("Welcome email failed:", emailError);
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
