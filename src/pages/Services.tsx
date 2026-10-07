import { AnimatedSection } from "@/components/AnimatedSection";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Award,
  Brain,
  Check,
  Cloud,
  Gauge,
  HeadphonesIcon,
  Lock,
  Rocket,
  Search,
  Settings,
  Shield,
  Smartphone,
  Stethoscope,
  ThumbsUp,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const healthcareFeatures = [
  "Electronic health record (EHR) systems",
  "Telehealth and remote patient monitoring platforms",
  "Clinical decision support and diagnostic tools",
  "Patient engagement portals and mobile applications",
  "Revenue cycle management and billing automation",
  "HIPAA, HITRUST, and SOC 2 compliance engineering",
];

const healthcareCards = [
  {
    icon: Stethoscope,
    title: "EHR Systems",
    subtitle: "300+ projects completed",
  },
  { icon: Video, title: "Telehealth", subtitle: "100K+ remote visits" },
  {
    icon: Activity,
    title: "Diagnostics",
    subtitle: "Real-time clinical support",
  },
  { icon: Smartphone, title: "Patient Apps", subtitle: "Engagement at scale" },
];

const aiFeatures = [
  "Customizable machine learning-based solutions",
  "Real-time anomaly detection and fraud prevention",
  "Computer vision for quality inspection and diagnostics",
  "Predictive analytics for resource forecasting and risk assessment",
  "Intelligent process automation and workflow optimization",
  "AI-powered recommendation engines and personalization",
];

const saasFeatures = [
  "Multi-tenant cloud architecture design and implementation",
  "Role-based access control and enterprise SSO",
  "API-first design with comprehensive documentation",
  "Performance optimization for high-throughput frameworks",
];

const saasCards = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    subtitle: "Scalable and resilient",
  },
  { icon: Lock, title: "Enterprise Security", subtitle: "SSO and compliance" },
  { icon: Gauge, title: "Performance", subtitle: "High-throughput systems" },
];

/* Technology icons via Simple Icons CDN; HIPAA/SOC2 uses Lucide Shield */
const techStack: { name: string; icon?: string; shield?: boolean }[] = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "GCP", icon: "https://cdn.simpleicons.org/googlecloud/4285F4" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "HIPAA/SOC2", shield: true },
];

const methodologySteps = [
  {
    icon: Search,
    title: "Discovery",
    text: "Deep-dive into your requirements, constraints, and success criteria.",
  },
  {
    icon: Brain,
    title: "Strategy",
    text: "Architecture and roadmap aligned with your business goals.",
  },
  {
    icon: Settings,
    title: "Development",
    text: "Iterative delivery with transparency and regular demos.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    text: "Rigorous testing and security validation before launch.",
  },
  {
    icon: Rocket,
    title: "Launch",
    text: "Staged rollout and go-live support for a smooth transition.",
  },
  {
    icon: HeadphonesIcon,
    title: "Support",
    text: "Ongoing maintenance, monitoring, and continuous improvement.",
  },
];

const Services = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <PageHero
          pill='Our Services'
          title='Enterprise Software Solutions'
          subtitle='We specialize in healthcare, AI, and SaaS development—delivering solutions that scale with your ambitions. From compliance-ready platforms to intelligent automation, we combine deep domain expertise with modern engineering so you ship faster and with confidence.'
          ctaLabel='Get Started'
          ctaHref='/contact'
          secondaryCta={{ label: "Explore Healthcare", href: "#healthcare" }}
          secondaryCtaScroll
        />

        {/* Healthcare */}
        <section
          id='healthcare'
          className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-background scroll-mt-24'
        >
          <div className='container-agency'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
              <AnimatedSection>
                <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                  Healthcare Software
                </span>
                <h2 className='text-2xl md:text-4xl text-foreground font-display font-semibold tracking-tight mb-6 leading-tight'>
                  Compliant, Secure, Patient-Centered
                </h2>
                <p className='font-body text-muted-foreground leading-relaxed mb-4 text-base'>
                  We build healthcare platforms that meet the highest standards of
                  compliance, security, and patient care—from EHRs and telehealth to
                  clinical decision support and revenue cycle management.
                </p>
                <p className='font-body text-muted-foreground leading-relaxed mb-6 text-sm'>
                  Every solution is designed with HIPAA, HITRUST, and SOC 2 in mind,
                  so you can focus on care delivery while we handle the technical and
                  regulatory complexity.
                </p>
                <ul className='space-y-3'>
                  {healthcareFeatures.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-3 font-body text-muted-foreground text-sm'
                    >
                      <Check className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className='grid grid-cols-2 gap-4'>
                  {healthcareCards.map((card) => (
                    <div
                      key={card.title}
                      className='rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20'
                    >
                      <div
                        className='w-10 h-10 rounded-lg flex items-center justify-center mb-3'
                        style={{ background: "hsl(var(--primary) / 0.12)" }}
                      >
                        <card.icon className='w-5 h-5 text-primary' />
                      </div>
                      <h3 className='font-display text-foreground text-sm tracking-wide mb-1'>
                        {card.title}
                      </h3>
                      <p className='font-body text-xs text-muted-foreground font-normal'>
                        {card.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* AI & ML */}
        <section className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-background'>
          <div className='container-agency'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch'>
              <AnimatedSection>
                <div className='h-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm'>
                  <div className='px-6 py-5 border-b border-border bg-muted/30'>
                    <p className='font-mono-custom text-[10px] uppercase tracking-widest text-muted-foreground'>
                      Performance benchmarks
                    </p>
                    <p className='font-body text-xs text-muted-foreground mt-0.5'>
                      Representative metrics from production deployments
                    </p>
                  </div>
                  <div className='p-6 space-y-0'>
                    {[
                      { label: "Model accuracy", value: "95.5%", unit: "" },
                      { label: "Reporting latency", value: "<50", unit: "ms" },
                      {
                        label: "Time series throughput",
                        value: "99",
                        unit: "×",
                      },
                    ].map((metric, i) => (
                      <div
                        key={metric.label}
                        className={`flex items-baseline justify-between gap-4 py-5 ${
                          i < 2 ? "border-b border-border" : ""
                        }`}
                      >
                        <span className='font-body text-sm text-muted-foreground'>
                          {metric.label}
                        </span>
                        <span className='font-display text-2xl tabular-nums text-foreground'>
                          {metric.value}
                          <span className='font-body text-base font-normal text-muted-foreground ml-0.5'>
                            {metric.unit}
                          </span>
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className='px-6 py-4 bg-muted/20 border-t border-border'>
                    <p className='font-body text-[11px] text-muted-foreground'>
                      Benchmarks vary by use case and data profile. Contact us for a
                      tailored assessment.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className='h-full flex flex-col relative overflow-hidden'>
                  {/* Decorative background orb */}
                  <div
                    className='absolute -top-10 -right-10 w-64 h-64 rounded-full opacity-[0.06] blur-3xl pointer-events-none'
                    style={{ background: "hsl(var(--primary))" }}
                    aria-hidden
                  />

                  {/* Header block */}
                  <div className='relative mb-8'>
                    {/* Geometric accent line + label */}
                    <div className='flex items-center gap-3 mb-4'>
                      <div className='relative flex items-center gap-1'>
                        <span className='block w-8 h-px bg-primary' />
                        <span className='block w-2 h-2 rounded-sm rotate-45 bg-primary' />
                      </div>
                      <p className='font-mono text-[10px] tracking-[0.25em] text-primary uppercase'>
                        AI & Machine Learning
                      </p>
                    </div>

                    {/* Heading with shimmer */}
                    <h2
                      className='text-2xl sm:text-3xl md:text-4xl leading-tight font-semibold relative'
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, hsl(var(--foreground)) 0%, hsl(var(--primary)) 50%, hsl(var(--foreground)) 100%)",
                        backgroundSize: "200% auto",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        animation: "shimmer 4s linear infinite",
                      }}
                    >
                      Intelligent Automation at Scale
                    </h2>

                    {/* Subtle underline accent */}
                    <div className='mt-3 flex gap-1'>
                      <span className='block h-[2px] w-12 bg-primary rounded-full' />
                      <span className='block h-[2px] w-4 bg-primary/40 rounded-full' />
                      <span className='block h-[2px] w-2 bg-primary/20 rounded-full' />
                    </div>
                  </div>

                  {/* Description */}
                  <p className='font-body text-muted-foreground leading-relaxed mb-8 max-w-lg text-sm'>
                    Our AI systems drive operational improvements—from real-time
                    anomaly detection to predictive analytics and intelligent process
                    automation—with enterprise-grade reliability and governance.
                  </p>

                  {/* Feature list */}
                  <ul className='space-y-1 flex-1'>
                    {aiFeatures.map((item, index) => (
                      <li
                        key={item}
                        className='group relative flex items-start gap-4 font-body text-muted-foreground text-sm py-3 px-4 rounded-xl border border-transparent hover:border-primary/20 hover:bg-primary/[0.04] transition-all duration-300'
                      >
                        {/* Index number */}
                        <span
                          className='shrink-0 w-6 h-6 rounded-md border border-primary/30 bg-primary/10 flex items-center justify-center text-[10px] font-mono font-semibold text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300'
                          aria-hidden
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className='leading-relaxed group-hover:text-foreground transition-colors duration-300'>
                          {item}
                        </span>

                        {/* Right arrow reveal */}
                        <span className='ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary text-xs self-center'>
                          →
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Shimmer keyframe injected inline */}
                  <style>{`
      @keyframes shimmer {
        0%   { background-position: 200% center; }
        100% { background-position: -200% center; }
      }
    `}</style>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* SaaS */}
        <section className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-background'>
          <div className='container-agency'>
            <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
              <AnimatedSection>
                <p className='font-mono-custom text-xs tracking-widest text-primary uppercase mb-3'>
                  SaaS Development
                </p>
                <h2 className='text-2xl md:text-4xl text-foreground mb-6 leading-tight'>
                  Cloud-Native Platforms Built to Scale
                </h2>
                <p className='font-body text-muted-foreground leading-relaxed mb-6'>
                  Multi-tenant SaaS solutions with enterprise-grade security,
                  real-time capabilities, and seamless user experiences.
                </p>
                <ul className='space-y-3'>
                  {saasFeatures.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-3 font-body text-muted-foreground text-sm'
                    >
                      <Check className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
              <AnimatedSection delay={100}>
                <div className='space-y-4'>
                  {saasCards.map((card) => (
                    <div
                      key={card.title}
                      className='rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20'
                    >
                      <div className='flex items-center gap-4'>
                        <div
                          className='w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0'
                          style={{ background: "hsl(var(--primary) / 0.12)" }}
                        >
                          <card.icon className='w-5 h-5 text-primary' />
                        </div>
                        <div>
                          <h3 className='font-display text-foreground text-sm tracking-wide'>
                            {card.title}
                          </h3>
                          <p className='font-body text-xs text-muted-foreground font-normal'>
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Choose Evolvo */}
        <section className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-background'>
          <div className='container-agency'>
            <AnimatedSection>
              <p className='font-mono-custom text-xs tracking-widest text-primary uppercase mb-3 text-center'>
                The difference
              </p>
              <h2 className='text-2xl md:text-4xl text-foreground text-center mb-4'>
                Why Choose <span className='text-gradient'>Evolvo</span>
              </h2>
              <p className='font-body text-muted-foreground text-center max-w-[90vw] mx-auto mb-12'>
                We combine deep technical expertise with a commitment to your
                long-term success. Here's what sets us apart when you're choosing a
                partner for mission-critical software.
              </p>
            </AnimatedSection>
            <div className='grid md:grid-cols-2 gap-6'>
              <AnimatedSection delay={100}>
                <div className='rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-primary/20 flex gap-5'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                    <ThumbsUp className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='font-display text-foreground text-lg mb-2'>
                      Proven track record
                    </h3>
                    <p className='font-body text-muted-foreground text-sm leading-relaxed'>
                      600+ companies scaled, 17 years of delivery, and an NPS of 71.
                      We deliver results that speak.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={150}>
                <div className='rounded-2xl border border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-primary/20 flex gap-5'>
                  <div className='flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary'>
                    <Award className='h-6 w-6' />
                  </div>
                  <div>
                    <h3 className='font-display text-foreground text-lg mb-2'>
                      Transparent process
                    </h3>
                    <p className='font-body text-muted-foreground text-sm leading-relaxed'>
                      Clear milestones, regular demos, and no surprises. You're in
                      the loop from discovery to launch.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 page-bg'>
          <div className='container-agency'>
            <AnimatedSection>
              <p className='font-mono-custom text-xs tracking-widest text-primary uppercase mb-3 text-center'>
                Our stack
              </p>
              <h2 className='text-2xl md:text-4xl text-foreground text-center mb-4'>
                Technologies We <span className='text-gradient'>Use</span>
              </h2>
              <p className='font-body text-muted-foreground text-center max-w-[90vw] mx-auto mb-12'>
                Modern, scalable tools so your product is built to last and easy to
                evolve.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={100}>
              <div className='flex flex-wrap justify-center gap-3 sm:gap-4'>
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className='inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-border bg-card text-sm font-body text-foreground shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300'
                  >
                    {tech.shield ? (
                      <Shield className='h-5 w-5 text-primary shrink-0' />
                    ) : tech.icon ? (
                      <img
                        src={tech.icon}
                        alt=''
                        className='h-5 w-5 object-contain shrink-0'
                        width={20}
                        height={20}
                      />
                    ) : null}
                    {tech.name}
                  </span>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Methodology */}
        <section className='py-16 sm:py-20 md:py-28 px-4 sm:px-6 md:px-8 bg-background'>
          <div className='container-agency'>
            <AnimatedSection>
              <p className='font-mono-custom text-xs tracking-widest text-primary uppercase text-center mb-3'>
                Our Process
              </p>
              <h2 className='text-2xl md:text-4xl text-foreground text-center mb-4'>
                A Proven Methodology
              </h2>
              <p className='font-body text-muted-foreground text-center max-w-[90vw] mx-auto mb-12'>
                An advanced, phased approach proven to deliver with precision,
                transparency, and predictable outcomes. We keep you in the loop at
                every stage—from discovery through launch and support.
              </p>
            </AnimatedSection>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {methodologySteps.map((step, i) => (
                <AnimatedSection key={step.title} delay={i * 50}>
                  <div className='rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full'>
                    <div
                      className='w-10 h-10 rounded-lg flex items-center justify-center mb-4'
                      style={{ background: "hsl(var(--primary) / 0.12)" }}
                    >
                      <step.icon className='w-5 h-5 text-primary' />
                    </div>
                    <h3 className='font-display text-foreground text-sm tracking-wide mb-2'>
                      {step.title}
                    </h3>
                    <p className='font-body text-sm text-muted-foreground font-normal leading-relaxed'>
                      {step.text}
                    </p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <AnimatedSection>
          <section
            className='py-16 md:py-24 px-6'
            style={{
              background:
                "linear-gradient(135deg, hsl(271, 60%, 22%) 0%, hsl(258, 55%, 18%) 100%)",
            }}
          >
            <div className='container-agency text-center max-w-[90vw] mx-auto'>
              <h2 className='text-2xl md:text-4xl text-white mb-4'>
                Have a Project in Mind?
              </h2>
              <p className='font-body text-white/90 mb-8 font-normal'>
                Let's explore how our expertise in healthcare, AI, and SaaS can bring
                your vision to life—with a clear roadmap, transparent process, and
                outcomes you can measure.
              </p>
              <Link
                to='/#contact'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/70 text-white font-body hover:bg-white/15 transition-all duration-300'
              >
                Request Consultation
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

export default Services;
