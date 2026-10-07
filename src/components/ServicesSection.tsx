import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BrainCircuit, Globe, Smartphone, Users } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { AnimatedSection } from './AnimatedSection'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description: 'Scalable React, Next.js, and cloud-native platforms built for performance and security.'
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Native and cross-platform apps—iOS, Android, React Native, Flutter.'
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    description: 'Custom AI agents, ML pipelines, and intelligent automation with clear ROI.'
  },
  {
    icon: Users,
    title: 'Dedicated Teams',
    description: 'Vetted engineers embedded in your workflow. Staff augmentation or full delivery.'
  }
]

export const ServicesSection = () => {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.service-card')
      cards.forEach((card, i) => {
        gsap.from(card, {
          clipPath: 'inset(100% 0% 0% 0%)',
          opacity: 0,
          duration: 0.9,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: card,
            start: 'top 90%',
            toggleActions: 'play none none none'
          },
          delay: i * 0.08
        })
      })
    }, gridRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id='services'
      className='section-padding'
      style={{
        background:
          'linear-gradient(180deg, hsl(var(--secondary) / 0.3) 0%, hsl(var(--background)) 100%)'
      }}
    >
      <div className='container-agency'>
        <div className='text-center mb-8 md:mb-10'>
          <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
            Capabilities
          </span>
          <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
            What We <span className='text-gradient'>Deliver</span>
          </h2>
          <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto'>
            End-to-end software capabilities tailored to enterprise needs.
          </p>
        </div>

        <div ref={gridRef} className='grid md:grid-cols-2 gap-6 md:gap-8'>
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 80}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className='service-card group h-full rounded-2xl border-2 border-border bg-card p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/25'
                style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
              >
                <div className='flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors'>
                  <service.icon className='h-7 w-7' />
                </div>
                <h3 className='font-display text-foreground text-xl font-semibold mb-3'>
                  {service.title}
                </h3>
                <p className='font-body text-muted-foreground leading-relaxed text-sm md:text-base'>
                  {service.description}
                </p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
