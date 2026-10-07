import { Handshake, Shield, Zap } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const items = [
  {
    icon: Shield,
    title: 'Enterprise-grade reliability',
    text: 'Built for scale and compliance. Secure, available, production-ready.'
  },
  {
    icon: Zap,
    title: 'Faster time to value',
    text: 'Agile delivery with clear milestones. No surprises, no scope creep.'
  },
  {
    icon: Handshake,
    title: 'Partners, not vendors',
    text: 'An extension of your team—invested in your success long-term.'
  }
]

export const WhyPartnerSection = () => (
  <section
    className='section-padding'
    style={{
      background:
        'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 100%)'
    }}
  >
    <div className='container-agency'>
      <div className='text-center mb-8 md:mb-10'>
        <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
          Why work with us
        </span>
        <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
          Why Partner With <span className='text-gradient'>Evolvo</span>
        </h2>
        <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto'>
          Technical excellence meets partnership mindset.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-6 md:gap-8'>
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 100}>
            <div className='group h-full rounded-2xl border-2 border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-0.5'>
              <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                <item.icon className='h-7 w-7' />
              </div>
              <h3 className='font-display text-foreground text-lg font-semibold mb-2'>
                {item.title}
              </h3>
              <p className='font-body text-muted-foreground text-sm leading-relaxed'>
                {item.text}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
)
