import { ReactNode } from "react";
import { useGsapReveal } from "@/hooks/useGsapReveal";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
}

export const AnimatedSection = ({ children, className = "", delay = 0, stagger }: AnimatedSectionProps) => {
  const ref = useGsapReveal({ delay: delay / 1000, stagger });

  return (
    <div ref={ref} className={className} style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
};
