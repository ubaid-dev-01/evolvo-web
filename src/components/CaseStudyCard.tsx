import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/caseStudies";

type CaseStudyCardProps = {
  study: CaseStudy;
  className?: string;
  animationDelay?: number;
};

export const CaseStudyCard = ({ study, className = "", animationDelay = 0 }: CaseStudyCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "power3.out", delay: animationDelay }}
      whileHover={{ y: -4 }}
      className={`case-card group min-w-0 ${className}`}
    >
      <Link
        to={study.ctaHref}
        className="block bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
      >
        {/* Top: image area with overlays */}
        <div className="relative h-44 sm:h-48 overflow-hidden rounded-t-xl bg-gradient-to-br from-primary/15 via-primary/10 to-accent/10">
          {study.image ? (
            <img
              src={study.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/20" />
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-xs font-medium text-primary-foreground"
            style={{ background: "hsl(var(--primary))" }}
          >
            • {study.year}
          </span>
          <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-card border border-border text-foreground">
              {study.categories[0]}
            </span>
            <span
              className="px-2.5 py-1 rounded-md text-xs font-medium text-primary-foreground"
              style={{ background: "hsl(var(--primary))" }}
            >
              {study.category}
            </span>
          </div>
        </div>

        {/* Middle: title, separator, subtitle, description */}
        <div className="p-5">
          <h3 className="text-lg text-foreground leading-tight">
            {study.title}
          </h3>
          <div className="h-px bg-border my-3 w-12" />
          <p className="text-xs text-muted-foreground text-right mb-3">
            {study.subtitle}
          </p>
          <p className="text-sm text-muted-foreground font-body leading-relaxed">
            {study.description}
          </p>
        </div>

        {/* Bottom: KPI boxes + tags */}
        <div className="px-5 pb-5">
          <div className="flex flex-wrap gap-2 mb-3">
            {study.metrics.map((m) => (
              <div
                key={m.label}
                className="flex-1 min-w-[80px] px-3 py-2 rounded-lg border border-border bg-primary/5"
              >
                <p className="text-[10px] font-mono-custom uppercase tracking-wider text-primary font-medium">
                  {m.label}
                </p>
                <p className="text-sm text-foreground">
                  {m.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs font-body text-muted-foreground bg-muted border border-border"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-2 text-primary font-body font-medium text-sm group-hover:underline">
            <span>{study.ctaLabel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
