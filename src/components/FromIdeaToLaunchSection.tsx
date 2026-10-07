import { ArrowRight, Layout, MessageSquare, Rocket } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AnimatedSection } from './AnimatedSection'

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery call',
    text: 'Align on goals, timeline, and success criteria.'
  },
  {
    icon: Layout,
    title: 'Strategy & roadmap',
    text: 'Clear plan, architecture, phased delivery.'
  },
  {
    icon: Rocket,
    title: 'Build & launch',
    text: 'Iterative delivery, regular demos, smooth go-live.'
  }
]

export const FromIdeaToLaunchSection = () => (
  <section
    className='section-padding'
    style={{
      background:
        'linear-gradient(160deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.4) 100%)'
    }}
  >
    <div className='container-agency'>
      <div className='text-center mb-8 md:mb-10'>
        <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
          Our process
        </span>
        <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
          From Idea to <span className='text-gradient'>Launch</span>
        </h2>
        <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto'>
          Simple, transparent process. You always know what's next.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-8 mb-14'>
        {steps.map((step, i) => (
          <AnimatedSection key={step.title} delay={i * 100}>
            <div className='group rounded-2xl border-2 border-border bg-card p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-0.5'>
              <div className='inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                <step.icon className='h-7 w-7 md:h-8 md:w-8' />
              </div>
              <h3 className='font-display text-foreground text-lg font-semibold mb-2'>
                {step.title}
              </h3>
              <p className='font-body text-muted-foreground text-sm leading-relaxed'>
                {step.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection>
        <div className='text-center'>
          <Link
            to='/contact'
            className='inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all'
          >
            Start your project
            <ArrowRight className='h-4 w-4' />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  </section>
)
