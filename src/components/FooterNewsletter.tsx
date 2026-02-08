"use client";

import { useState } from "react";
import { toast } from "sonner";

export function FooterNewsletter() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          email, 
          source: "footer",
          site: "smarthomeexplorer",
          utm_source: new URLSearchParams(window.location.search).get("utm_source") || undefined,
          utm_medium: new URLSearchParams(window.location.search).get("utm_medium") || undefined,
        }),
      });

      if (response.ok) {
        setIsSubscribed(true);
        toast.success("Welcome aboard! Check your inbox for smart home deals.");
        setEmail("");
      } else {
        const error = await response.json();
        toast.error(error.message || "Something went wrong. Try again?");
      }
    } catch {
      toast.error("Connection error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 rounded-xl p-8 mb-8">
        <div className="text-center">
          <span className="text-3xl mb-2 block">🎉</span>
          <h3 className="text-lg font-semibold text-emerald-900">You&apos;re subscribed!</h3>
          <p className="text-emerald-700 text-sm mt-1">Check your inbox for a welcome email with exclusive deals.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-xl p-8 mb-8">
      <div className="max-w-xl mx-auto text-center">
        <span className="inline-block bg-indigo-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
          📬 SMART HOME DEALS
        </span>
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Get the Best Smart Home Deals
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Expert picks, price drops, and exclusive deals delivered weekly. Join 5,000+ smart home enthusiasts.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          {/* Honeypot for spam */}
          <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
          
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm text-gray-900 placeholder-gray-500"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            {isLoading ? "Subscribing..." : "Get Deals →"}
          </button>
        </form>
        
        <p className="text-xs text-gray-500 mt-3">
          🔒 No spam, ever. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
