"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "deskgearhq" }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setMessage("You're in! Check your inbox for a welcome email.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  };

  return (
    <section className="py-12 bg-blue-600">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <Mail className="w-10 h-10 text-blue-200 mx-auto mb-4" />
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
          Get the Best Desk Gear Deals
        </h2>
        <p className="text-blue-100 mb-6">
          Weekly roundup of top picks, price drops, and new product launches. No spam.
        </p>

        {status === "success" ? (
          <div className="flex items-center justify-center gap-2 text-white">
            <CheckCircle className="w-5 h-5" />
            <span>{message}</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-11 bg-white/10 border-white/20 text-white placeholder:text-blue-200"
            />
            <Button
              type="submit"
              disabled={status === "loading"}
              className="h-11 bg-white text-blue-600 hover:bg-blue-50 font-medium"
            >
              {status === "loading" ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-200 text-sm mt-2">{message}</p>
        )}

        <p className="text-xs text-blue-200 mt-4">
          Join 500+ desk setup enthusiasts
        </p>
      </div>
    </section>
  );
}
