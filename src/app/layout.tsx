import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import { siteConfig } from "@/config/site";

const GA_MEASUREMENT_ID = "G-R9R6P7KVVE";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-heading", weight: ["400", "600", "700", "800"] });

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${nunito.variable} font-sans bg-white text-slate-800 antialiased`}>
        {children}
        <ExitIntentPopup
          siteName="ChristmasGearHQ"
          headline="🎄 Wait! Don't Miss the Best Deals"
          description="Get gift guides, holiday deals, and festive decor tips delivered to your inbox."
          buttonText="Subscribe Free"
          accentColor="#dc2626"
        />
        <Footer />
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 py-8 mt-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </div>
          <nav className="flex gap-6 text-sm text-gray-500">
            <a href="/about" className="hover:text-gray-700">About</a>
            <a href="/affiliate-disclosure" className="hover:text-gray-700">Affiliate Disclosure</a>
            <a href="/privacy-policy" className="hover:text-gray-700">Privacy</a>
          </nav>
        </div>
        <p className="text-xs text-gray-400 mt-4 text-center">
          As an Amazon Associate, we earn from qualifying purchases.
        </p>
      </div>
    </footer>
  );
}
