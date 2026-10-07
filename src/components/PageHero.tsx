import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

export type PageHeroProps = {
  pill: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryCta?: { label: string; href: string };
  /** Optional tags (e.g. category, year) shown below subtitle */
  tags?: React.ReactNode;
  /** Scroll anchor for secondary CTA (e.g. #healthcare) */
  secondaryCtaScroll?: boolean;
};

const heroGradient =
  "linear-gradient(135deg, hsl(271, 60%, 22%) 0%, hsl(258, 55%, 18%) 50%, hsl(260, 50%, 14%) 100%)";

export const PageHero = ({
  pill,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryCta,
  tags,
  secondaryCtaScroll = false,
}: PageHeroProps) => {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 px-4 sm:px-6 md:px-8 text-center"
      style={{ background: heroGradient }}
    >
      {/* Subtle diagonal pattern for depth */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            rgba(255,255,255,0.4) 20px,
            rgba(255,255,255,0.4) 21px
          )`,
        }}
      />
      {/* Soft glow at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-[90vw] mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-block px-4 py-2 rounded-full text-xs font-mono-custom tracking-[0.2em] text-white border-2 border-white/80 mb-6 shadow-lg shadow-black/10 bg-white/5"
        >
          {pill}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-5"
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-xl text-white/90 font-body max-w-[90vw] mx-auto mb-4"
          >
            {subtitle}
          </motion.p>
        )}

        {tags && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.18 }}
            className="flex flex-wrap justify-center gap-2 mb-6"
          >
            {tags}
          </motion.div>
        )}

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-20 h-0.5 bg-white/70 mx-auto mb-8 sm:mb-10"
          style={{ transformOrigin: "center" }}
          aria-hidden
        />

        {/* CTAs — always visible and prominent */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center"
        >
          {ctaHref.startsWith("#") ? (
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-primary font-body font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 shrink-0" />
            </a>
          ) : (
            <Link
              to={ctaHref}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-primary font-body font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl hover:bg-white/95 transition-all duration-300"
            >
              {ctaLabel}
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          )}
          {secondaryCta && (
            secondaryCtaScroll ? (
              <a
                href={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white text-white font-body font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {secondaryCta.label}
                <ChevronDown className="w-4 h-4 shrink-0" />
              </a>
            ) : (
              <Link
                to={secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full border-2 border-white text-white font-body font-semibold text-sm sm:text-base bg-white/10 hover:bg-white/20 transition-all duration-300"
              >
                {secondaryCta.label}
                <ArrowRight className="w-4 h-4 shrink-0" />
              </Link>
            )
          )}
        </motion.div>
      </div>

      {/* Angled bottom edge for a more unique look */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-background"
        style={{
          clipPath: "polygon(0 60%, 100% 40%, 100% 100%, 0 100%)",
        }}
        aria-hidden
      />
    </section>
  );
};
