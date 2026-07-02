'use client';

import { useLenis } from 'lenis/react';
import { useCallback } from 'react';

/**
 * Returns a function that scrolls to a section id using Lenis when available,
 * falls back to native smooth scroll. Keeps a single source of truth so
 * Lenis vs native scroll don't double-ease.
 */
export function useScrollTo(offset = 80) {
  const lenis = useLenis();

  return useCallback(
    (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      if (lenis) {
        lenis.scrollTo(top, { duration: 1.2 });
      } else {
        window.scrollTo({ top, behavior: 'smooth' });
      }
    },
    [lenis, offset],
  );
}