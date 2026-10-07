import { AnimatedSection } from '@/components/AnimatedSection'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Footer } from '@/components/Footer'
import { Navbar } from '@/components/Navbar'
import { PageHero } from '@/components/PageHero'
import { caseStudiesData } from '@/data/caseStudies'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Brain,
  Cloud,
  Flag,
  Heart,
  Layout,
  Rocket,
  Search
} from 'lucide-react'
import { Link } from 'react-router-dom'

const CaseStudiesList = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />

      <PageHero
        pill='Selected Work'
        title='Case Studies'
        subtitle='Explore our featured projects and see how we deliver measurable results across healthcare, AI, and enterprise software. Each case study highlights the challenge, our approach, and the outcomes—so you can see what partnership with Evolvo looks like in practice. From compliance-ready healthcare platforms to AI-driven automation, these stories reflect the impact we bring when we partner with teams like yours.'
        ctaLabel='Start a Project'
        ctaHref='/contact'
        secondaryCta={{ label: 'Back to Home', href: '/' }}
      />

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className='pt-16 md:pt-24 pb-20 md:pb-24'
      >
        <div className='container-agency px-4 sm:px-6 md:px-8'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {caseStudiesData.map((study, i) => (
              <CaseStudyCard
                key={study.slug}
                study={study}
                animationDelay={i * 0.06}
              />
            ))}
          </div>

          <div className='mt-16 text-center'>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-body text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md'
            >
              Start a project
            </Link>
          </div>

          {/* How We Deliver — enriched */}
          <AnimatedSection>
            <section
              className='mt-20 md:mt-28 pt-16 md:pt-20 pb-16 md:pb-20 px-6 md:px-10 rounded-3xl border border-border/80'
              style={{
                background:
                  'linear-gradient(160deg, hsl(var(--secondary)) 0%, hsl(var(--background)) 50%, hsl(var(--primary) / 0.04) 100%)'
              }}
            >
              <div className='text-center mb-12 md:mb-16'>
                <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                  Our approach
                </span>
                <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
                  How We <span className='text-gradient'>Deliver</span>
                </h2>
                <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10'>
                  Every case study follows a disciplined process—with you in the
                  loop at every step. We use structured phases, clear
                  milestones, and transparent communication so there are no
                  surprises—only outcomes you can measure.
                </p>
                <div className='inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl bg-card/80 border-2 border-primary/20 px-5 py-3 shadow-sm'>
                  <span className='font-body text-sm font-medium text-foreground'>
                    Structured phases
                  </span>
                  <span className='text-muted-foreground/60'>·</span>
                  <span className='font-body text-sm font-medium text-foreground'>
                    Clear milestones
                  </span>
                  <span className='text-muted-foreground/60'>·</span>
                  <span className='font-body text-sm font-medium text-foreground'>
                    No surprises
                  </span>
                </div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
                {[
                  {
                    icon: Search,
                    label: 'Discovery',
                    desc: 'Goals, scope, success criteria'
                  },
                  {
                    icon: Layout,
                    label: 'Strategy',
                    desc: 'Architecture & roadmap'
                  },
                  {
                    icon: Rocket,
                    label: 'Build',
                    desc: 'Iterative delivery & demos'
                  },
                  { icon: Flag, label: 'Launch', desc: 'Go-live & support' }
                ].map((step, i) => (
                  <div
                    key={step.label}
                    className='rounded-2xl border-2 border-border bg-card p-5 md:p-6 text-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-0.5'
                  >
                    <div className='inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3'>
                      <step.icon className='h-6 w-6 md:h-7 md:w-7' />
                    </div>
                    <h3 className='font-display text-foreground font-semibold text-sm md:text-base mb-1'>
                      {step.label}
                    </h3>
                    <p className='font-body text-muted-foreground text-xs'>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* By Industry — enriched */}
          <AnimatedSection>
            <section
              className='mt-16 md:mt-20 py-16 md:py-20 px-6 md:px-10 rounded-3xl'
              style={{
                background:
                  'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.6) 100%)'
              }}
            >
              <div className='text-center mb-12'>
                <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
                  Expertise by sector
                </span>
                <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
                  By <span className='text-gradient'>Industry</span>
                </h2>
                <p className='font-body text-muted-foreground text-base max-w-xl mx-auto mb-10'>
                  Deep experience where software quality and compliance matter
                  most. We've delivered across healthcare, AI & ML, and SaaS—so
                  we speak your language and understand your constraints.
                </p>
              </div>
              <div className='grid md:grid-cols-3 gap-6'>
                {[
                  {
                    icon: Heart,
                    label: 'Healthcare',
                    desc: 'EHR, telehealth, compliance-ready solutions.'
                  },
                  {
                    icon: Brain,
                    label: 'AI & ML',
                    desc: 'Custom models, automation, intelligent workflows.'
                  },
                  {
                    icon: Cloud,
                    label: 'SaaS & Enterprise',
                    desc: 'Scalable, cloud-native platforms.'
                  }
                ].map(item => (
                  <div
                    key={item.label}
                    className='group rounded-2xl border-2 border-border bg-card p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-1'
                  >
                    <div className='inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                      <item.icon className='h-8 w-8' />
                    </div>
                    <h3 className='font-display text-foreground text-lg font-semibold mb-2'>
                      {item.label}
                    </h3>
                    <p className='font-body text-muted-foreground text-sm'>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </AnimatedSection>

          {/* Let's Start Your Story — enriched */}
          <AnimatedSection>
            <section
              className='mt-20 md:mt-28 rounded-3xl overflow-hidden border-2 border-primary/20 p-10 md:p-14 text-center shadow-lg'
              style={{
                background:
                  'linear-gradient(135deg, hsl(var(--primary) / 0.12) 0%, hsl(var(--accent) / 0.08) 50%, hsl(var(--primary) / 0.06) 100%)'
              }}
            >
              <h2 className='text-xl md:text-4xl text-foreground font-display font-semibold tracking-tight mb-3'>
                Ready to start your <span className='text-gradient'>story</span>
                ?
              </h2>
              <p className='font-body text-muted-foreground mb-8 max-w-lg mx-auto text-base'>
                Tell us about your project. We'll respond within 24 hours with a
                tailored approach and next steps—no pressure, just a real
                conversation and a clear path forward.
              </p>
              <Link
                to='/contact'
                className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all'
              >
                Let's talk
                <ArrowRight className='h-4 w-4' />
              </Link>
            </section>
          </AnimatedSection>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}

export default CaseStudiesList
