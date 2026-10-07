import { caseStudiesData } from '@/data/caseStudies'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { CaseStudyCard } from './CaseStudyCard'

export const CaseStudies = () => {
  return (
    <section
      id='work'
      className='section-padding'
      style={{
        background:
          'linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--secondary) / 0.3) 100%)'
      }}
    >
      <div className='container-agency min-w-0'>
        <div className='text-center mb-8 md:mb-10'>
          <span className='inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-4 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20'>
            Selected Work
          </span>
          <h2 className='text-2xl md:text-5xl text-foreground font-display font-semibold tracking-tight mb-4'>
            Featured <span className='text-gradient'>Case Studies</span>
          </h2>
          <p className='font-body text-muted-foreground text-base md:text-lg max-w-2xl mx-auto'>
            Real projects, real outcomes across healthcare, AI, and SaaS.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {caseStudiesData.map((study, i) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
              animationDelay={i * 0.08}
            />
          ))}
        </div>

        <div className='mt-14 text-center'>
          <Link
            to='/case-studies'
            className='inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-md hover:shadow-lg'
          >
            View all case studies
            <ArrowUpRight className='w-4 h-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
