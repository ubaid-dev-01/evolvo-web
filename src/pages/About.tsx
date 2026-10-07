import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Cog,
  Handshake,
  Lightbulb,
  Shield,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const milestones = [
  { title: "Founded", text: "Enterprise-grade software studio." },
  { title: "Healthcare", text: "EHR, telehealth, compliance-ready platforms." },
  {
    title: "AI Division",
    text: "Automation, computer vision, predictive analytics.",
  },
  { title: "Global Scale", text: "600+ clients. NPS 71." },
];

const values = [
  {
    icon: Shield,
    title: "Security First",
    text: "Enterprise-grade compliance built in.",
  },
  { icon: Cog, title: "Innovation Driven", text: "Future-ready, scalable systems." },
  {
    icon: Handshake,
    title: "Partnership Mindset",
    text: "An extension of your team.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Obsessed",
    text: "Clean architecture, rigorous testing.",
  },
];

const About = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <PageHero
          pill='About Us'
          title='We Build Software That Matters'
          subtitle='Engineers and strategists delivering measurable business value at scale.'
          ctaLabel='Get Started'
          ctaHref='/contact'
          secondaryCta={{ label: "Our Services", href: "/services" }}
        />

        {/* Our Story */}
        <section
          className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8'
          style={{
            background:
              "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 100%)",
          }}
        >
          <div className='container-agency'>
            <div className='grid lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
              <AnimatedSection delay={100}>
                <div>
                  <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                    Our Story
                  </span>
                  <h2 className='text-2xl md:text-4xl text-foreground font-display font-semibold tracking-tight mb-4 leading-tight'>
                    From Vision to Impact
                  </h2>
                  <p className='font-body text-muted-foreground leading-relaxed text-base'>
                    Founded in 2014. From dev studio to full-spectrum enterprise
                    software company serving startups through the Fortune 500.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <div className='space-y-8'>
                  {milestones.map((m, i) => (
                    <div key={m.title} className='flex gap-4'>
                      <div
                        className='flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-display text-primary-foreground'
                        style={{ background: "hsl(var(--primary))" }}
                      >
                        {i + 1}
                      </div>
                      <div>
                        <h3 className='font-display text-foreground text-lg mb-1'>
                          {m.title}
                        </h3>
                        <p className='font-body text-sm text-muted-foreground leading-relaxed'>
                          {m.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <AnimatedSection className='flex flex-col items-center'>
          <section
            className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 w-full'
            style={{ background: "hsl(var(--secondary))" }}
          >
            <div className='container-agency flex flex-col items-center text-center'>
              <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                Mission & Vision
              </span>
              <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
                Empowering Organizations Through Technology
              </h2>
              <p className='font-body text-muted-foreground max-w-2xl mb-8 md:mb-10 text-base'>
                Software that creates measurable value—with clarity and
                accountability.
              </p>
              <div className='grid md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto'>
                <div className='bg-card rounded-2xl p-6 md:p-8 border-2 border-border shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md'>
                  <div
                    className='w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto'
                    style={{ background: "hsl(var(--primary))" }}
                  >
                    <Target className='w-7 h-7 text-primary-foreground' />
                  </div>
                  <h3 className='font-display text-foreground text-xl mb-2'>
                    Our Mission
                  </h3>
                  <p className='font-body text-muted-foreground leading-relaxed text-sm'>
                    Enterprise software that transforms how you operate and
                    grow—every project drives real impact.
                  </p>
                </div>
                <div className='bg-card rounded-2xl p-6 md:p-8 border-2 border-border shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md'>
                  <div
                    className='w-14 h-14 rounded-full flex items-center justify-center mb-5 mx-auto'
                    style={{ background: "hsl(var(--primary))" }}
                  >
                    <Lightbulb className='w-7 h-7 text-primary-foreground' />
                  </div>
                  <h3 className='font-display text-foreground text-xl mb-2'>
                    Our Vision
                  </h3>
                  <p className='font-body text-muted-foreground leading-relaxed text-sm'>
                    The most trusted engineering partner for mission-critical
                    software.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* What Sets Us Apart */}
        <AnimatedSection>
          <section className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 bg-background'>
            <div className='container-agency'>
              <p className='font-mono-custom text-xs tracking-widest text-primary uppercase text-center mb-3'>
                Why Evolvo
              </p>
              <h2 className='text-2xl md:text-4xl text-foreground text-center mb-4'>
                What Sets Us Apart
              </h2>
              <p className='font-body text-muted-foreground text-center max-w-[90vw] mx-auto mb-8 md:mb-10'>
                Precision, reliability, and a partnership mindset.
              </p>
              <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {values.map((v) => (
                  <div
                    key={v.title}
                    className='bg-card rounded-2xl p-6 border border-border shadow-sm'
                  >
                    <div
                      className='w-12 h-12 rounded-full flex items-center justify-center mb-5'
                      style={{ background: "hsl(var(--primary))" }}
                    >
                      <v.icon className='w-6 h-6 text-primary-foreground' />
                    </div>
                    <h3 className='font-display text-foreground text-lg mb-2'>
                      {v.title}
                    </h3>
                    <p className='font-body text-sm text-muted-foreground leading-relaxed'>
                      {v.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Awards & Recognition */}
        <AnimatedSection>
          <section
            className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8'
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.5) 100%)",
            }}
          >
            <div className='container-agency'>
              <div className='text-center mb-8 md:mb-10'>
                <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-white uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                  Trusted by leaders
                </span>
                <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
                  Awards & <span className='text-gradient'>Recognition</span>
                </h2>
                <p className='font-body text-muted-foreground text-base max-w-xl mx-auto'>
                  Industry-recognized. Client-validated.
                </p>
              </div>
              <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {[
                  "Clutch Top Agency 2025",
                  "NPS Score 71",
                  "600+ Companies Scaled",
                ].map((item) => (
                  <div
                    key={item}
                    className='group flex items-center gap-4 rounded-2xl border-2 border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-0.5'
                  >
                    <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                      <Award className='h-7 w-7' />
                    </div>
                    <span className='font-display text-foreground font-semibold'>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Join the Team */}
        <AnimatedSection>
          <section
            className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8 md:my-2 rounded-3xl mx-4 md:mx-auto max-w-[90vw] border-2 border-border/80'
            style={{
              background:
                "linear-gradient(160deg, hsl(var(--secondary)) 0%, hsl(var(--primary) / 0.06) 100%)",
            }}
          >
            <div className='container-agency text-center max-w-[90vw] mx-auto'>
              <div className='inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5'>
                <Users className='h-7 w-7' />
              </div>
              <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
                Join Our <span className='text-gradient'>Team</span>
              </h2>
              <p className='font-body text-muted-foreground mb-6 max-w-xl mx-auto text-base'>
                Talented engineers who care about quality and impact.
              </p>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all'
              >
                Get in touch
                <ArrowRight className='h-4 w-4' />
              </Link>
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section
            className='py-8 sm:py-10 md:py-14 px-4 sm:px-6 md:px-8'
            style={{
              background:
                "linear-gradient(135deg, hsl(271, 60%, 22%) 0%, hsl(258, 55%, 18%) 100%)",
            }}
          >
            <div className='container-agency text-center max-w-[90vw] mx-auto'>
              <h2 className='text-2xl md:text-4xl text-white mb-3'>
                Join 600+ Organizations We've Empowered
              </h2>
              <p className='font-body text-white/90 mb-6'>
                Clear strategy. Transparent process. Real outcomes.
              </p>
              <Link
                to='/#contact'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-card border-2 font-body text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300'
                style={{ borderColor: "hsl(var(--primary))" }}
              >
                Talk to Our Team
                <ArrowRight className='w-4 h-4' />
              </Link>
            </div>
          </section>
        </AnimatedSection>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
