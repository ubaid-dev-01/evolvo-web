import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'
import { AnimatedSection } from './AnimatedSection'

const testimonials = [
  {
    quote:
      "Evolvo didn't just build our platform — they fundamentally transformed how we approach digital product development. The ROI has been extraordinary. We now ship features in weeks that used to take months, with quality we can stand behind. Their team felt like an extension of our own from day one.",
    author: 'Sarah Chen',
    role: 'CTO, FinScale'
  },
  {
    quote:
      "Their AI integration cut our processing time by 83%. We went from a 6-month bottleneck to real-time results. It's been a game-changer for our operations, and the team was a true partner throughout—responsive, transparent, and invested in our success. I'd recommend them to any organization serious about automation.",
    author: 'Marcus Webb',
    role: 'VP Engineering, ARC Europe'
  },
  {
    quote:
      "Working with Evolvo felt like extending our own team. They understood our enterprise constraints—compliance, scale, and reliability—and delivered beyond expectations, on time and on budget. The platform they built is now core to how we manage resources across 20+ facilities. I'd recommend them without hesitation.",
    author: 'Elena Voss',
    role: 'Director of Product, Merck Digital'
  }
]

export const Testimonials = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(c => (c + 1) % testimonials.length)
  const prev = () =>
    setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      className='section-padding'
      style={{
        background:
          'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.4) 100%)'
      }}
    >
      <div className='container-agency'>
        <div className='text-center mb-12 md:mb-16'>
          <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
            Client Testimonials
          </span>
          <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
            In Their <span className='text-gradient'>Words</span>
          </h2>
          <p className='font-body text-muted-foreground text-base max-w-xl mx-auto'>
            Hear from leaders who've partnered with us to scale products,
            streamline operations, and deliver measurable business outcomes.
            Their stories reflect the kind of partnership and results you can
            expect when you work with Evolvo.
          </p>
        </div>

        <AnimatedSection delay={100}>
          <div className='relative rounded-2xl border-2 border-border bg-card p-8 md:p-10 pb-20 shadow-sm transition-all duration-300 hover:border-primary/20'>
            <Quote className='w-10 h-10 text-primary/30 mb-6' />
            <blockquote className='text-lg md:text-xl font-body text-foreground leading-relaxed mb-6 min-h-[100px] pr-24 transition-all duration-300'>
              "{testimonials[current].quote}"
            </blockquote>
            <div className='pr-24'>
              <p className='font-body font-semibold text-foreground'>
                {testimonials[current].author}
              </p>
              <p className='font-mono-custom text-xs text-muted-foreground'>
                {testimonials[current].role}
              </p>
            </div>
            <div className='absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2'>
              <button
                onClick={prev}
                className='h-10 w-10 rounded-full border-2 border-border bg-background flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors'
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-4 h-4 text-foreground' />
              </button>
              <button
                onClick={next}
                className='h-10 w-10 rounded-full border-2 border-border bg-background flex items-center justify-center hover:bg-primary/10 hover:border-primary/30 transition-colors'
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-4 h-4 text-foreground' />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
