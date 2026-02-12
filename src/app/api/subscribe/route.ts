import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, source, name } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    const BREVO_LIST_ID = process.env.BREVO_LIST_ID || "11";

    if (!BREVO_API_KEY) {
      console.error("BREVO_API_KEY not configured");
      return NextResponse.json(
        { error: "Newsletter service not configured" },
        { status: 500 }
      );
    }

    // Add contact to Brevo with double opt-in
    const contactPayload: Record<string, unknown> = {
      email,
      listIds: [parseInt(BREVO_LIST_ID)],
      attributes: {
        SOURCE: source || "christmasgearhq",
        FIRSTNAME: name || "",
      },
      updateEnabled: true,
    };

    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": BREVO_API_KEY,
      },
      body: JSON.stringify({
        ...contactPayload,
        templateId: 1, // Default DOI template - configure in Brevo
        redirectionUrl: "https://christmasgearhq.com/welcome",
      }),
    });

    // If DOI endpoint fails (template not set up), fall back to regular contact creation
    if (!response.ok) {
      const errorData = await response.json();
      console.log("DOI endpoint response:", errorData);
      
      // Fallback to regular contact creation
      const fallbackResponse = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": BREVO_API_KEY,
        },
        body: JSON.stringify(contactPayload),
      });

      if (!fallbackResponse.ok) {
        const fallbackError = await fallbackResponse.json();
        console.error("Brevo fallback error:", fallbackError);
        
        // Handle already subscribed
        if (fallbackError.code === "duplicate_parameter") {
          return NextResponse.json({ success: true, message: "Already subscribed" });
        }
        
        return NextResponse.json(
          { error: "Failed to subscribe" },
          { status: 500 }
        );
      }

      // Send welcome email for non-DOI signups
      try {
        await fetch("https://api.brevo.com/v3/smtp/email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "api-key": BREVO_API_KEY,
          },
          body: JSON.stringify({
            sender: { name: "ChristmasGearHQ", email: "hello@christmasgearhq.com" },
            to: [{ email }],
            subject: "Welcome to ChristmasGearHQ! 🎄 You're in the giveaway!",
            htmlContent: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #fee2e2 0%, #dcfce7 100%); padding: 32px; border-radius: 12px;">
                <h1 style="color: #dc2626; text-align: center;">Welcome to ChristmasGearHQ! 🎄</h1>
                <div style="background: white; padding: 24px; border-radius: 8px; margin: 20px 0;">
                  <p style="font-size: 16px; color: #374151;">Thanks for subscribing! You're now entered in our holiday giveaway! 🎁</p>
                  <p>You'll get:</p>
                  <ul style="color: #374151;">
                    <li>🎯 Weekly top picks and price drops</li>
                    <li>📚 New buying guides for holiday decorating</li>
                    <li>✨ Seasonal tips and inspiration</li>
                    <li>🎁 Automatic entry in our monthly giveaways</li>
                  </ul>
                </div>
                <p style="text-align: center;">In the meantime, check out our latest guides:</p>
                <p style="text-align: center;">
                  <a href="https://christmasgearhq.com/guides" style="display: inline-block; background: #dc2626; color: white; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: bold;">
                    Browse Guides →
                  </a>
                </p>
                <p style="margin-top: 24px; color: #666; font-size: 14px; text-align: center;">
                  Happy decorating! 🎄<br/>
                  The ChristmasGearHQ Team
                </p>
              </div>
            `,
          }),
        });
      } catch (emailError) {
        console.error("Welcome email failed:", emailError);
        // Don't fail the subscription if welcome email fails
      }
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
