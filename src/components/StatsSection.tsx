import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Sparkles, Star, TrendingUp } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: 600, suffix: '+', label: 'Companies Helped', icon: Building2 },
  { value: 21, suffix: '%', label: 'Avg. Conversion Lift', icon: TrendingUp },
  { value: 83, suffix: '%', label: 'Cost Reduction (AI)', icon: Sparkles },
  {
    value: 4.9,
    suffix: '/5',
    label: 'Client Satisfaction',
    icon: Star,
    decimal: true
  }
]

const Counter = ({
  target,
  suffix,
  decimal
}: {
  target: number
  suffix: string
  decimal?: boolean
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (started.current) return
        started.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: 'power2.out',
          onUpdate: () => setCount(obj.val)
        })
      }
    })
  }, [target])

  return (
    <div
      ref={ref}
      className='text-3xl sm:text-4xl md:text-5xl font-display font-semibold tracking-tight text-foreground'
    >
      {decimal ? count.toFixed(1) : Math.floor(count)}
      <span className='text-primary'>{suffix}</span>
    </div>
  )
}

export const StatsSection = () => {
  return (
    <section
      id='results'
      className='section-padding bg-gradient-to-b from-background to-secondary/30'
    >
      <div className='container-agency'>
        <AnimatedSection className='flex flex-col items-center justify-center text-center'>
          <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
            Measurable Impact
          </span>
          <h2 className='text-2xl  md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
            Results That <span className='text-gradient'>Speak</span>
          </h2>
          <p className='font-body text-muted-foreground max-w-2xl mb-14 text-base'>
            Real numbers from real partnerships.
          </p>
        </AnimatedSection>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6'>
          {stats.map((stat, i) => (
            <AnimatedSection key={stat.label} delay={i * 80}>
              <div className='group h-full rounded-2xl border border-border bg-card p-6 sm:p-7 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary/20 hover:-translate-y-0.5'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground'>
                    <stat.icon className='h-5 w-5' />
                  </span>
                </div>
                <Counter
                  target={stat.value}
                  suffix={stat.suffix}
                  decimal={stat.decimal}
                />
                <p className='mt-2 text-sm font-body text-muted-foreground leading-snug'>
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
