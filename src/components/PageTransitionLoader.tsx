import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const BAR_DURATION_MS = 500;
const HIDE_DELAY_MS = 150;

export const PageTransitionLoader = () => {
  const location = useLocation();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(0);

    const raf = requestAnimationFrame(() => {
      setProgress(100);
    });
    const t = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, BAR_DURATION_MS + HIDE_DELAY_MS);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-primary/15 overflow-hidden pointer-events-none"
      aria-hidden
    >
      <div
        className="h-full bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
        style={{
          width: `${progress}%`,
          transition: `width ${BAR_DURATION_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
      />
    </div>
  );
};
