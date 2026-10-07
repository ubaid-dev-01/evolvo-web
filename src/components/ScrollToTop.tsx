import { useEffect, useRef, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LenisContext } from "@/contexts/LenisContext";

/**
 * Scrolls to top when the route (pathname) changes.
 * Works with Lenis smooth scroll and falls back to native scroll on all browsers and mobile.
 */
function scrollToTopNative() {
  // Instant scroll (no smooth) so it sticks on route change
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  // Cover browsers that use documentElement or body as scroll root (e.g. some mobile)
  const doc = document.documentElement;
  const body = document.body;
  if (doc.scrollTop !== 0) doc.scrollTop = 0;
  if (body.scrollTop !== 0) body.scrollTop = 0;
}

export const ScrollToTop = () => {
  const location = useLocation();
  const lenisRef = useContext(LenisContext);
  const prevPathRef = useRef(location.pathname);

  useEffect(() => {
    if (prevPathRef.current === location.pathname) return;
    prevPathRef.current = location.pathname;

    // Run after React has committed the new route and browser has a chance to layout
    const run = () => {
      // 1. Lenis (smooth-scroll library) – instant jump so route change feels correct
      const lenis = lenisRef?.current ?? null;
      if (lenis && typeof lenis.scrollTo === "function") {
        try {
          lenis.scrollTo(0, { immediate: true });
        } catch (_) {
          scrollToTopNative();
        }
      }
      // 2. Native scroll – required for all browsers and mobile (Lenis may not own scroll everywhere)
      scrollToTopNative();
    };

    // Run after paint (next frame) so new route content is in DOM
    let id2: number | null = null;
    const id1 = requestAnimationFrame(() => {
      run();
      id2 = requestAnimationFrame(run);
    });

    // Fallback: re-apply after short delay for mobile/layout shifts (iOS Safari, etc.)
    const t = setTimeout(run, 150);

    return () => {
      cancelAnimationFrame(id1);
      if (id2 !== null) cancelAnimationFrame(id2);
      clearTimeout(t);
    };
  }, [location.pathname, lenisRef]);

  return null;
};
