import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ENGAGEMENT_DELAY_MS = 30_000; // 30 seconds

const accentPurple = "#541F7B";
const iconBg = "#F5F0FF";
const headingColor = "#1E1E1E";
const bodyColor = "#6B6B6B";
const footerColor = "#9CA3AF";

export const EngagementModal = () => {
  const [open, setOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;
    const timer = window.setTimeout(() => {
      setHasTriggered(true);
      setOpen(true);
    }, ENGAGEMENT_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [hasTriggered]);

  const closeModal = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={(next) => setOpen(next)}>
      <DialogContent
        className="max-w-md border-0 p-0 gap-0 overflow-hidden rounded-2xl shadow-xl outline-none duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 [&>button]:absolute [&>button]:right-4 [&>button]:top-4 [&>button]:rounded-sm [&>button]:p-0 [&>button]:h-8 [&>button]:w-8 [&>button]:text-neutral-600 [&>button]:hover:text-neutral-900 [&>button]:bg-transparent [&>button]:border-0 [&>button]:opacity-100 [&>button]:shadow-none"
        aria-describedby="engagement-modal-description"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
        }}
      >
        <div className="p-8 sm:p-10 pt-12 text-center">
          {/* Icon — lavender rounded square, dark purple rocket */}
          <div
            className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl"
            style={{ background: iconBg }}
          >
            <Rocket className="h-7 w-7" style={{ color: accentPurple }} aria-hidden />
          </div>

          <DialogTitle
            className="text-xl font-bold tracking-tight sm:text-2xl"
            style={{ color: headingColor }}
          >
            Ready to Evolve Your Business?
          </DialogTitle>
          <DialogDescription
            id="engagement-modal-description"
            className="mt-3 text-sm leading-relaxed"
            style={{ color: bodyColor }}
          >
            Our team of experts is ready to help you build scalable, high-performance software solutions tailored to your enterprise needs. From discovery to launch, we deliver with transparency and a partnership mindset—so you get outcomes, not just output.
          </DialogDescription>

          {/* Buttons in row */}
          <div className="mt-8 flex flex-row flex-wrap items-stretch justify-center gap-3">
            <Link
              to="/contact"
              onClick={closeModal}
              className="inline-flex min-w-[140px] flex-1 items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2"
              style={{ background: accentPurple }}
            >
              Schedule a Call
            </Link>
            <Button
              type="button"
              onClick={closeModal}
              className="min-w-[120px] flex-1 rounded-xl border-2 py-3.5 text-sm font-semibold transition-colors hover:opacity-90"
              style={{ borderColor: accentPurple, color: accentPurple, background: "#FFFFFF" }}
            >
              Maybe Later
            </Button>
          </div>

          {/* Footer — social proof */}
          <p
            className="mt-6 text-xs"
            style={{ color: footerColor }}
          >
            Join 600+ enterprises scaling with Evolvo. NPS 71 · 24-hour response.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
