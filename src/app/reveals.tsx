"use client";

import { useEffect } from "react";

/**
 * Scroll reveals and the stat count-up, as progressive enhancement: the
 * markup ships visible, and adding `.motion` to <body> is what arms the
 * hidden-then-reveal transition. If this never runs, the page reads fine.
 */
export default function Reveals() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    const counted = new WeakSet<HTMLElement>();
    const countUp = (scope: HTMLElement) => {
      scope.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => {
        if (counted.has(el)) return;
        counted.add(el);
        if (reduced) return;
        const end = parseFloat(el.dataset.count ?? "0");
        const dec = Number(el.dataset.decimals ?? 0);
        const suf = el.dataset.suffix ?? "";
        const t0 = performance.now(), dur = 1400;
        const tick = (t: number) => {
          const p = Math.min(1, (t - t0) / dur);
          const e = 1 - Math.pow(1 - p, 3);
          el.textContent = (end * e).toFixed(dec) + suf;
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    };

    if (reduced) {
      targets.forEach((el) => countUp(el));
      return;
    }

    document.body.classList.add("motion");

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          const el = en.target as HTMLElement;
          el.classList.add("in");
          countUp(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.2 },
    );
    targets.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      document.body.classList.remove("motion");
    };
  }, []);

  return null;
}
