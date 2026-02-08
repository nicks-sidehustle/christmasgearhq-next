import { SiteHeader } from "@/components/SiteHeader";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "About Us",
  description: "Learn about DeskGearHQ and how we help you find the best desk accessories.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="py-10">
        <div className="container mx-auto px-4 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
            About {siteConfig.name}
          </h1>

          <div className="prose prose-gray max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              We're desk setup enthusiasts who got tired of sifting through thousands of Amazon reviews and sponsored "best of" lists to find quality gear.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              {siteConfig.name} aggregates expert reviews and real user feedback to help you find the best desk accessories, monitor stands, cable management solutions, and office organization products.
            </p>
            <p className="text-gray-600 mb-4">
              We don't test products in a lab. Instead, we analyze reviews from trusted sources, compare ratings across platforms, and distill everything into actionable recommendations.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">How We Work</h2>
            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-6">
              <li>We research products across Amazon, specialty retailers, and expert review sites</li>
              <li>We aggregate ratings and identify consensus picks</li>
              <li>We create buying guides that cut through the noise</li>
              <li>We update our recommendations regularly</li>
            </ul>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Affiliate Disclosure</h2>
            <p className="text-gray-600 mb-4">
              We participate in affiliate programs, including Amazon Associates. When you click our links and make a purchase, we may earn a commission at no extra cost to you.
            </p>
            <p className="text-gray-600 mb-4">
              This helps us keep the site running and continue creating helpful content. Our recommendations are based on merit, not commission rates.
            </p>

            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Contact</h2>
            <p className="text-gray-600">
              Questions or suggestions? Reach out at{" "}
              <a href="mailto:hello@deskgearhq.com" className="text-blue-600 hover:underline">
                hello@deskgearhq.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
