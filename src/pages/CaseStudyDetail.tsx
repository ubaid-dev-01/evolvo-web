import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, ExternalLink } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { PageHero } from "@/components/PageHero";
import { caseStudiesData } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = caseStudiesData.find((s) => s.slug === slug);

  if (!study) return <Navigate to="/" replace />;

  const stars = Math.floor(study.testimonial?.rating ?? 0);
  const hasHalf = (study.testimonial?.rating ?? 0) % 1 >= 0.5;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <PageHero
        pill="Case Study"
        title={study.title}
        subtitle={study.subtitle}
        ctaLabel="Start Your Project"
        ctaHref="/contact"
        secondaryCta={{ label: "All Case Studies", href: "/case-studies" }}
        tags={
          <>
            <span
              className="px-3 py-1.5 rounded-full text-xs font-medium text-primary-foreground"
              style={{ background: "hsl(var(--primary))" }}
            >
              {study.category}
            </span>
            <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/20 text-white border border-white/40">
              {study.year}
            </span>
          </>
        }
      />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="pt-16 md:pt-24 pb-16"
      >
        <div className="container-agency px-4 sm:px-6 md:px-8">
          <div className="mb-10">
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Case Studies
            </Link>
          </div>

          {/* Hero image area */}
          <AnimatedSection>
            <div className="rounded-xl overflow-hidden page-bg border border-border aspect-video max-h-[420px] mb-12 bg-gradient-to-br from-primary/10 via-primary/5 to-accent/5">
              {study.image ? (
                <img
                  src={study.image}
                  alt=""
                  className="w-full h-full object-cover"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, 90vw"
                />
              ) : null}
            </div>
          </AnimatedSection>

          {/* Two columns: Project Impact (left) + Overview & Testimonial (right) */}
          <AnimatedSection delay={100}>
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Left: Project Impact card with CTA hook */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 bg-card border border-border rounded-xl p-6 shadow-sm">
                <h2 className="text-lg text-foreground mb-4">
                  Project Impact
                </h2>
                <div className="space-y-4 mb-6">
                  {study.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="px-4 py-3 rounded-lg border border-border bg-primary/5"
                    >
                      <p className="text-xs font-mono-custom uppercase tracking-wider text-primary font-medium">
                        {m.label}
                      </p>
                      <p className="text-xl font-display text-foreground">
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs font-body text-muted-foreground bg-muted border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* CTA hook */}
                <Link
                  to="/#contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl font-body text-primary-foreground transition-all duration-300 hover:opacity-95 hover:shadow-lg"
                  style={{ background: "hsl(var(--primary))" }}
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/#contact"
                  className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 text-sm font-body text-primary hover:underline"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Get in touch
                </Link>
              </div>
            </div>

            {/* Right: Project Overview + Testimonial */}
            <div className="lg:col-span-3 space-y-8">
              <section>
                <h2 className="text-lg text-foreground mb-3">
                  Project Overview
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {study.overview}
                </p>
              </section>

              {study.testimonial && (
                <div
                  className="rounded-xl p-6 md:p-8 text-primary-foreground"
                  style={{ background: "hsl(var(--primary))" }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < stars || (i === stars && hasHalf)
                            ? "fill-current"
                            : "opacity-40"
                        }`}
                        aria-hidden
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg font-body leading-relaxed mb-6">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-display text-sm">
                      {study.testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-body font-semibold">
                        {study.testimonial.author}
                      </p>
                      <p className="text-sm opacity-90">
                        {study.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                <span className="text-xs font-mono-custom uppercase tracking-wider text-muted-foreground">
                  Project tags
                </span>
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-xs font-body text-muted-foreground bg-muted border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </AnimatedSection>

          {/* Mid-page CTA banner */}
          <AnimatedSection delay={150}>
          <section className="mt-16 md:mt-24 rounded-2xl overflow-hidden border border-border bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl text-foreground mb-2">
              Ready to build something{" "}
              <span className="text-gradient">extraordinary?</span>
            </h2>
            <p className="text-muted-foreground font-body mb-6 max-w-[90vw] mx-auto">
              Let's turn your idea into a product people actually love.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body text-primary-foreground transition-all duration-300 hover:shadow-lg hover:opacity-95"
              style={{ background: "hsl(var(--primary))" }}
            >
              Start Your Project
              <ArrowRight className="w-4 h-4" />
            </Link>
          </section>
          </AnimatedSection>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default CaseStudyDetail;
