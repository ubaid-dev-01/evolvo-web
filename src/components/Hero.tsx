const heroBg =
  'https://images.unsplash.com/photo-1504384308090-c894fd04c538d?w=1920&q=80'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const subtextRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const proofRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  // Cursor-follow glow
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window
      setMousePos({
        x: (e.clientX / innerWidth) * 100,
        y: (e.clientY / innerHeight) * 100
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate wave layers with calm opposing motion
      const mm = gsap.matchMedia()
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.to('.wave-top', {
          y: 40,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
        gsap.to('.wave-bottom', {
          y: -40,
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        })
      })

      // Parallax background
      gsap.to(bgRef.current, {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })

      // Split headline animation (character-by-character)
      const headline = headlineRef.current
      if (headline) {
        const lines = headline.querySelectorAll('.hero-line')
        lines.forEach(line => {
          const text = line.textContent || ''
          line.textContent = ''
          text.split('').forEach(char => {
            const span = document.createElement('span')
            span.textContent = char === ' ' ? '\u00A0' : char
            span.style.display = 'inline-block'
            span.classList.add('hero-char')
            line.appendChild(span)
          })
        })

        gsap.from('.hero-char', {
          y: 80,
          opacity: 0,
          rotateX: -40,
          duration: 0.8,
          ease: 'power4.out',
          stagger: 0.025,
          delay: 0.3
        })
      }

      // Subtext + tagline
      gsap.from(subtextRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        delay: 1.0
      })

      // CTAs — animate in and ensure they stay visible (fromTo so end state is explicit)
      const ctaEls = ctaRef.current?.children
      if (ctaEls?.length) {
        gsap.fromTo(
          ctaEls,
          { y: 28, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
            stagger: 0.12,
            delay: 1.35,
            clearProps: 'transform' // prevent any scroll/other animation from overwriting
          }
        )
      }

      // Social proof — fromTo so final state stays visible
      const proofEls = proofRef.current?.children
      if (proofEls?.length) {
        gsap.fromTo(
          proofEls,
          { y: 18, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: 0.08,
            delay: 1.75,
            clearProps: 'transform'
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className='relative min-h-screen flex items-center justify-center overflow-hidden'
    >
      {/* Parallax Background — purple/indigo gradient overlay + image */}
      <div ref={bgRef} className='absolute inset-0 z-0 will-change-transform'>
        <img
          src={heroBg}
          alt=''
          className='w-full h-full object-cover opacity-45 scale-110'
          crossOrigin='anonymous'
        />
        {/* Rich purple–indigo gradient overlay for a branded, premium look */}
        <div
          className='absolute inset-0'
          style={{
            background:
              'linear-gradient(135deg, hsl(271, 60%, 18%) 0%, hsl(258, 50%, 12%) 45%, hsl(260, 55%, 8%) 100%)'
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/50' />
        {/* Subtle grid pattern */}
        <div
          className='absolute inset-0 opacity-[0.04]'
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />
        {/* Wave layers — purple/indigo only */}
        <div className='wave-top absolute -top-16 left-0 right-0 h-48 bg-gradient-to-b from-primary/25 to-transparent blur-[80px] will-change-transform pointer-events-none' />
        <div className='wave-bottom absolute -bottom-16 left-0 right-0 h-48 bg-gradient-to-t from-primary/20 to-transparent blur-[80px] will-change-transform pointer-events-none' />
      </div>

      {/* Cursor-follow glow */}
      <div
        ref={glowRef}
        className='absolute w-[600px] h-[600px] rounded-full pointer-events-none transition-all ease-out'
        style={{
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          transitionDuration: '2000ms',
          background:
            'radial-gradient(circle, hsl(271, 85%, 45% / 0.18) 0%, transparent 70%)',
          filter: 'blur(60px)'
        }}
      />

      <div className='relative z-10 w-full max-w-[90vw] mx-auto text-center text-white px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24'>
        {/* Tagline — clearer hierarchy */}
        <div ref={subtextRef}>
          <p
            className='font-mono-custom text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] mb-2 uppercase'
            style={{ color: 'hsl(258, 75%, 80%)' }}
          >
            Enterprise Digital Agency
          </p>
          <p className='text-[10px] sm:text-xs text-white/70 font-body tracking-wide mb-4 sm:mb-6'>
            Trusted by 600+ companies worldwide · Clutch Top Agency 2025
          </p>
        </div>

        {/* Kinetic Headline — responsive scale and spacing */}
        <h1
          ref={headlineRef}
          className='text-3xl min-[480px]:text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-[0.92] mb-4 sm:mb-6'
          style={{ perspective: '600px' }}
        >
          <span className='hero-line block text-white'>We Build Products</span>
          <span className='hero-line block text-white'>That Scale</span>
        </h1>

        <p className='font-body text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed text-white/92 px-0'>
          From MVPs to enterprise platforms—we turn ambitious ideas into high-performance products that drive real growth.
        </p>

        {/* CTAs — visible, responsive, consistent spacing */}
        <div
          ref={ctaRef}
          className='flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center'
        >
          <a
            href='#contact'
            className='group magnetic-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-primary text-primary-foreground font-body font-semibold text-sm sm:text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 w-full sm:w-auto min-w-[160px] sm:min-w-[180px]'
          >
            Get Started
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0' />
          </a>
          <a
            href='#work'
            className='group magnetic-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white/50 bg-white/10 backdrop-blur-sm font-body font-semibold text-sm sm:text-base text-white hover:bg-white/20 hover:border-white/70 transition-all duration-300 w-full sm:w-auto min-w-[160px] sm:min-w-[180px]'
          >
            Explore Our Work
            <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0' />
          </a>
          <a
            href='#contact'
            className='magnetic-btn inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border border-white/40 bg-white/5 backdrop-blur-sm font-body font-semibold text-sm sm:text-base text-white hover:bg-white/15 hover:border-white/60 transition-all duration-300 w-full sm:w-auto min-w-[160px] sm:min-w-[180px]'
          >
            Estimate Project
          </a>
        </div>

        {/* Trust hooks — reduce friction */}
        <div className='mt-6 sm:mt-8 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-[11px] sm:text-xs text-white/80 font-body'>
          <span className='inline-flex items-center gap-1.5'>
            <span
              className='w-1.5 h-1.5 rounded-full bg-emerald-400/90'
              aria-hidden
            />
            Free strategy call
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <span
              className='w-1.5 h-1.5 rounded-full bg-emerald-400/90'
              aria-hidden
            />
            No commitment
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <span
              className='w-1.5 h-1.5 rounded-full bg-emerald-400/90'
              aria-hidden
            />
            24h response
          </span>
        </div>
        <p className='mt-4 text-xs sm:text-sm text-white/75 font-body italic max-w-xl mx-auto'>
          "They felt like an extension of our team from day one. We now ship in
          weeks what used to take months."
          <span className='not-italic block mt-1 text-white/60'>
            — Sarah Chen, CTO, FinScale
          </span>
        </p>

        {/* Social Proof — responsive spacing and gaps */}
        <div
          ref={proofRef}
          className='mt-12 sm:mt-16 md:mt-20 pt-8 sm:pt-10 border-t border-white/10 flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-3 font-mono-custom text-[10px] sm:text-xs tracking-widest uppercase text-white/75'
        >
          <span>600+ Companies Scaled</span>
          <span
            className='hidden sm:inline w-1 h-1 rounded-full bg-white/40'
            aria-hidden
          />
          <span>17+ Years of Delivery</span>
          <span
            className='hidden sm:inline w-1 h-1 rounded-full bg-white/40'
            aria-hidden
          />
          <span>NPS Score: 71</span>
          <span
            className='hidden sm:inline w-1 h-1 rounded-full bg-white/40'
            aria-hidden
          />
          <span>Clutch Top Agency 2025</span>
          <span
            className='hidden sm:inline w-1 h-1 rounded-full bg-white/40'
            aria-hidden
          />
          <span>24-Hour Response Time</span>
        </div>
      </div>
    </section>
  )
}
