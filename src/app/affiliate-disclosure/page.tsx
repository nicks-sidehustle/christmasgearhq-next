import { Metadata } from "next/metadata";

export const metadata = {
  title: "Affiliate Disclosure | Smart Home Explorer",
  description: "Our affiliate disclosure and how we make money while keeping reviews honest.",
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Affiliate Disclosure</h1>
      
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-lg text-muted-foreground mb-6">
          Transparency matters to us. Here&apos;s how Smart Home Explorer works and how we keep the lights on.
        </p>

        <h2>How We Make Money</h2>
        <p>
          Smart Home Explorer is a participant in the <strong>Amazon Services LLC Associates Program</strong>, 
          an affiliate advertising program designed to provide a means for sites to earn advertising fees 
          by advertising and linking to Amazon.com.
        </p>
        <p>
          When you click on product links on our site and make a purchase, we may earn a small commission 
          at <strong>no additional cost to you</strong>. This helps us keep the site running, pay for hosting, 
          and continue providing free smart home reviews and guides.
        </p>

        <h2>Our Editorial Independence</h2>
        <p>
          <strong>Our reviews and recommendations are never influenced by affiliate relationships.</strong> We 
          aggregate expert opinions from dozens of trusted sources and present consensus scores based purely 
          on product quality, features, and value.
        </p>
        <p>
          We recommend products we genuinely believe in. If a product isn&apos;t good, we&apos;ll tell you — 
          even if it means we don&apos;t earn a commission.
        </p>

        <h2>What This Means for You</h2>
        <ul>
          <li>You pay the <strong>same price</strong> whether you use our links or not</li>
          <li>Our reviews are based on <strong>expert consensus</strong>, not commission rates</li>
          <li>We clearly label product links that may earn us a commission</li>
          <li>We never accept payment for positive reviews</li>
        </ul>

        <h2>Other Affiliate Programs</h2>
        <p>
          In addition to Amazon Associates, we may also participate in affiliate programs from:
        </p>
        <ul>
          <li>Best Buy</li>
          <li>Product manufacturer referral programs</li>
          <li>Other retail partners</li>
        </ul>

        <h2>Questions?</h2>
        <p>
          If you have any questions about our affiliate relationships or how we make money, 
          feel free to reach out. We believe in full transparency.
        </p>

        <p className="text-sm text-muted-foreground mt-8">
          Last updated: February 2026
        </p>
      </div>
    </div>
  );
}
