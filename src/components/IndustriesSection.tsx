import { Brain, Cloud, Heart } from 'lucide-react'
import { AnimatedSection } from './AnimatedSection'

const industries = [
  {
    icon: Heart,
    name: 'Healthcare',
    desc: 'EHR, telehealth, compliance-ready. HIPAA, HITRUST, SOC 2.'
  },
  {
    icon: Brain,
    name: 'AI & ML',
    desc: 'Custom models, automation, data pipelines. Real ROI.'
  },
  {
    icon: Cloud,
    name: 'SaaS & Enterprise',
    desc: 'Scalable, multi-tenant, cloud-native. API-first design.'
  }
]

export const IndustriesSection = () => (
  <section
    className='section-padding'
    style={{
      background:
        'linear-gradient(180deg, hsl(var(--secondary) / 0.5) 0%, hsl(var(--background)) 100%)'
    }}
  >
    <div className='container-agency'>
      <div className='text-center mb-8 md:mb-10'>
        <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
          Where we excel
        </span>
        <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
          Industries We <span className='text-gradient'>Serve</span>
        </h2>
        <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto'>
          Deep domain experience where quality and compliance matter most.
        </p>
      </div>
      <div className='grid md:grid-cols-3 gap-6 md:gap-8'>
        {industries.map((ind, i) => (
          <AnimatedSection key={ind.name} delay={i * 80}>
            <div className='group h-full rounded-2xl border-2 border-border bg-card p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl hover:border-primary/25 hover:-translate-y-1'>
              <div className='inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                <ind.icon className='h-8 w-8' />
              </div>
              <h3 className='font-display text-foreground text-lg font-semibold mb-2'>
                {ind.name}
              </h3>
              <p className='font-body text-muted-foreground text-sm leading-relaxed'>
                {ind.desc}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
)
