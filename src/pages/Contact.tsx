import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, MessageCircle, MapPin, Clock, MessageSquare, HelpCircle, AlertCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "";

// Initialize EmailJS with public key (required before send)
if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY });
}

const budgetOptions = [
  { value: "10-50", label: "$10K – $50K" },
  { value: "50-100", label: "$50K – $100K" },
  { value: "100-250", label: "$100K – $250K" },
  { value: "250+", label: "$250K+" },
];

const Contact = () => {
  const navigate = useNavigate();
  const [budget, setBudget] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const companyRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!SERVICE_ID || !PUBLIC_KEY || !TEMPLATE_ID) {
      setStatus("error");
      setErrorMessage("Email is not configured. Please set VITE_EMAILJS_* in .env");
      return;
    }
    setStatus("sending");
    setErrorMessage("");
    try {
      // Template "Contact Us" (template_qq18jlp) expects these parameter names
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        title: "Contact form submission",
        full_name: nameRef.current?.value ?? "",
        name: nameRef.current?.value ?? "",
        work_email: emailRef.current?.value ?? "",
        email: emailRef.current?.value ?? "",
        company: companyRef.current?.value ?? "",
        budget_range: budget || "Not selected",
        project_description: descriptionRef.current?.value ?? "",
        reference_id: "",
        company_address: "",
        year: new Date().getFullYear().toString(),
      });
      setBudget("");
      nameRef.current && (nameRef.current.value = "");
      emailRef.current && (emailRef.current.value = "");
      companyRef.current && (companyRef.current.value = "");
      descriptionRef.current && (descriptionRef.current.value = "");
      navigate("/thank-you");
    } catch (err: unknown) {
      setStatus("error");
      // EmailJS throws { status, text } with the API error message
      const msg =
        err && typeof err === "object" && "text" in err && typeof (err as { text: string }).text === "string"
          ? (err as { text: string }).text
          : err instanceof Error
            ? err.message
            : "Something went wrong. Please try again.";
      setErrorMessage(msg);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <PageHero
          pill="Contact Us"
          title="Let's Build Together"
          subtitle="Tell us about your project, goals, and timeline. We'll get back to you within 24 hours with a tailored strategy and next steps—no pressure, just a clear path forward. Whether you need a discovery call, a proposal, or pointed resources, our team is here to help."
          ctaLabel="Submit an Inquiry"
          ctaHref="#contact-form"
          secondaryCta={{ label: "View Case Studies", href: "/case-studies" }}
        />

        {/* Main content */}
        <section id="contact-form" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-background scroll-mt-24">
          <div className="container-agency">
            <div className="grid md:grid-cols-[1fr,1fr] gap-12 lg:gap-16">
              {/* Left: Form */}
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Full Name
                  </Label>
                  <Input
                    ref={nameRef}
                    id="name"
                    name="from_name"
                    placeholder="John Smith"
                    className="rounded-lg bg-muted/80 border-border h-11 transition-colors focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Work Email
                  </Label>
                  <Input
                    ref={emailRef}
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder="john@company.com"
                    className="rounded-lg bg-muted/80 border-border h-11 transition-colors focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-foreground">
                    Company
                  </Label>
                  <Input
                    ref={companyRef}
                    id="company"
                    name="company"
                    placeholder="Your company name"
                    className="rounded-lg bg-muted/80 border-border h-11 transition-colors focus-visible:ring-2 focus-visible:ring-primary/30"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-foreground">Budget Range</Label>
                  <Select value={budget} onValueChange={setBudget}>
                    <SelectTrigger className="rounded-lg bg-muted/80 border-border h-11 transition-colors focus:ring-2 focus:ring-primary/30 [&>svg]:opacity-50">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      {budgetOptions.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description" className="text-foreground">
                    Project Description
                  </Label>
                  <textarea
                    ref={descriptionRef}
                    id="description"
                    name="message"
                    placeholder="Tell us about your project, goals, and timeline...."
                    rows={5}
                    className={cn(
                      "flex w-full rounded-lg border border-input bg-muted/80 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:ring-offset-2",
                      "transition-colors resize-none"
                    )}
                  />
                </div>
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-destructive/10 text-destructive px-4 py-3 text-sm font-medium">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    {errorMessage}
                  </div>
                )}
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === "sending"}
                  className="w-full rounded-lg h-12 text-base font-medium transition-all hover:opacity-90 disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Submit Inquiry"}
                </Button>
              </motion.form>

              {/* Right: Get in Touch + Book a Call */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-xl font-display text-foreground font-semibold mb-3">
                    Get in Touch
                  </h2>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                    Our team reviews every inquiry and responds with a tailored
                    approach within one business day. We'll ask clarifying questions
                    if needed and provide a clear next step—whether that's a discovery
                    call, a proposal, or pointed resources. No generic templates; we
                    treat every conversation as the start of a potential partnership.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Mail className="h-5 w-5" />
                      </span>
                      <a
                        href="mailto:hello@evolvo.dev"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        hello@evolvo.dev
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MessageCircle className="h-5 w-5" />
                      </span>
                      <a
                        href="https://wa.me/18001234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +1 (800) 123-4567
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </span>
                      <span className="text-foreground">
                        San Francisco, California
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl p-6 bg-muted/60 border border-border">
                  <h3 className="text-lg font-display text-foreground mb-2">
                    Prefer a call?
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-5">
                    Schedule a 30-minute discovery call with our solutions team.
                  </p>
                  <Button
                    size="lg"
                    className="rounded-lg h-11 px-6 transition-all hover:opacity-90"
                  >
                    Book a Call
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What Happens Next — enriched */}
        <section
          className="py-20 md:py-28 px-6 md:px-10 rounded-3xl mx-4 md:mx-auto max-w-[90vw] border-2 border-border/80"
          style={{ background: "linear-gradient(160deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 100%)" }}
        >
          <div className="container-agency">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                After you reach out
              </span>
              <h2 className="text-3xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4">
                What Happens <span className="text-gradient">Next</span>
              </h2>
              <p className="font-body text-muted-foreground text-base max-w-xl mx-auto">
                We keep it simple so you're never left wondering. You'll hear from us within one business day with a clear next step—whether that's a discovery call, a proposal, or pointed resources.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: Mail, step: "1", title: "We read your inquiry", text: "Our team reviews every message within one business day." },
                { icon: MessageSquare, step: "2", title: "Personalized response", text: "You'll get a tailored reply and next steps—no generic templates." },
                { icon: Clock, step: "3", title: "Discovery call", text: "Optional 30-min call to align on goals and scope." },
              ].map((item) => (
                <div
                  key={item.step}
                  className="group rounded-2xl border-2 border-border bg-card p-6 md:p-7 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-0.5"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="font-mono-custom text-xs text-primary font-semibold">Step {item.step}</span>
                  <h3 className="font-display text-foreground font-semibold mt-2 mb-1">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Answers — enriched */}
        <section
          className="py-20 md:py-28 px-6 md:px-10"
          style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.4) 100%)" }}
        >
          <div className="container-agency">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <span className="inline-flex items-center gap-2 font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                <HelpCircle className="h-4 w-4" />
                Quick answers
              </span>
              <h2 className="text-3xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4">
                Quick <span className="text-gradient">Answers</span>
              </h2>
              <p className="font-body text-muted-foreground text-base max-w-xl mx-auto mb-10">
                Common questions we hear from teams like yours. We're here to give you straight answers so you can decide if we're the right fit.
              </p>
            </motion.div>
            <div className="max-w-2xl mx-auto space-y-4">
              {[
                { q: "How soon will I hear back?", a: "We respond to all inquiries within one business day." },
                { q: "Do you work with startups?", a: "Yes. We work with startups through to enterprise—what matters is fit and shared goals." },
                { q: "What if my project is small?", a: "We offer discovery calls and scoped engagements. Reach out and we'll find the right fit." },
              ].map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl border-2 border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <h3 className="font-display text-foreground font-semibold mb-1">{faq.q}</h3>
                  <p className="font-body text-muted-foreground text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;
