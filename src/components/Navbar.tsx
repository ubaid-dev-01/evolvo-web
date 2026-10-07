import { ScrollProgress } from '@/components/ScrollProgress'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Case Studies', href: '#caseStudies', path: '/case-studies' },
  { label: 'Services', href: '#services', path: '/services' },
  { label: 'About', href: '#about', path: '/about' },
  { label: 'Contact', href: '#contact', path: '/contact' }
]

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#caseStudies')
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll spy: set active nav link from section in view
  useEffect(() => {
    const sections = navLinks.map(l => l.href.slice(1)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const id = entry.target.id
          if (id) setActiveSection(`#${id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const isOverHero = !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out flex flex-col ${
        scrolled ? 'navbar-glass pt-4 pb-0 sm:pt-5 sm:pb-0' : 'py-6 bg-transparent'
      } ${isOverHero ? 'navbar-hero-mode' : ''}`}
    >
      <div className='container-agency flex items-center justify-between px-4 sm:px-6 flex-1 min-h-[52px] sm:min-h-[56px]'>
        <Link
          to='/'
          className='flex items-center gap-2.5 shrink-0 transition-opacity duration-300 hover:opacity-90 navbar-logo'
          aria-label='Evolvo home'
        >
          <img
            src='/evolvo-logo.png'
            alt=''
            className='h-7 w-auto sm:h-8 navbar-logo-img'
            width={40}
            height={40}
          />
          <span className='font-display text-base sm:text-lg font-semibold tracking-wide navbar-brand-text'>
            Evolvo
          </span>
        </Link>

        {/* Desktop Nav — capsule design */}
        <nav className='hidden md:flex items-center gap-3'>
          <div className='navbar-capsule font-body'>
            {navLinks.map(link => {
              const isActive = link.path
                ? location.pathname === link.path
                : activeSection === link.href
              const to = link.path
                ? link.path
                : { pathname: '/', hash: link.href.replace('#', '') }
              return (
                <Link
                  key={link.label}
                  to={to}
                  onClick={() => !link.path && setActiveSection(link.href)}
                  className={`navbar-capsule-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
          <Link to='/contact' className='navbar-cta font-body'>
            Get Started
            <ChevronRight className='h-4 w-4' aria-hidden />
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`md:hidden p-2 -m-2 transition-colors duration-300 ${
            isOverHero ? 'text-white' : 'text-foreground'
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label='Toggle menu'
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu — capsule-style links */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='md:hidden navbar-glass mt-2 mx-4 rounded-2xl overflow-hidden border border-border'
          >
            <nav className='flex flex-col p-4 gap-1'>
              {navLinks.map(link => {
                const to = link.path
                  ? link.path
                  : { pathname: '/', hash: link.href.replace('#', '') }
                return (
                  <Link
                    key={link.label}
                    to={to}
                    onClick={() => setMobileOpen(false)}
                    className='font-body font-medium text-foreground py-3 px-4 rounded-full hover:bg-muted transition-colors'
                  >
                    {link.label}
                  </Link>
                )
              })}
              <Link
                to='/contact'
                onClick={() => setMobileOpen(false)}
                className='navbar-cta mt-2 justify-center'
              >
                Get Started
                <ChevronRight className='h-4 w-4' aria-hidden />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <ScrollProgress />
    </header>
  )
}
