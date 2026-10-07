import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

const benefits = [
  'Strategy and scope in days, not weeks',
  'Transparent pricing, clear milestones',
  'Dedicated point of contact from day one',
  'Measurable outcomes you can count on'
]

export const CTASection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-inner', {
        scale: 0.96,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      })
      gsap.to('.cta-glow', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id='contact' className='section-padding' ref={sectionRef}>
      <div className='container-agency'>
        <div className='cta-inner relative overflow-hidden rounded-3xl border-2 border-primary/20 py-16 md:py-24 px-8 md:px-12 text-center bg-card shadow-lg'>
          <div className='cta-glow absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[100px] pointer-events-none will-change-transform' />
          <div className='relative z-10'>
            <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
              Start a Project
            </span>
            <p className='font-body text-sm text-primary font-medium mb-2'>
              We take on a limited number of new projects each quarter to ensure
              quality and attention.
            </p>
            <h2 className='text-xl md:text-5xl lg:text-6xl text-foreground font-display font-semibold tracking-tight mb-4'>
              Let's Build Something{' '}
              <span className='text-gradient'>Extraordinary</span>
            </h2>
            <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8'>
              Tell us your vision. We respond within 24 hours.
            </p>
            <ul className='flex flex-wrap justify-center gap-x-8 gap-y-2 mb-10 text-sm text-muted-foreground'>
              {benefits.map(item => (
                <li key={item} className='flex items-center gap-2'>
                  <CheckCircle className='h-4 w-4 text-primary shrink-0' />
                  {item}
                </li>
              ))}
            </ul>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/contact'
                className='group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold shadow-md hover:shadow-lg hover:opacity-95 transition-all'
              >
                Estimate Your Project
                <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
              </Link>
              <a
                href='mailto:hello@evolvo.com'
                className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-primary font-body font-semibold text-foreground hover:bg-primary/10 transition-all'
              >
                hello@evolvo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
