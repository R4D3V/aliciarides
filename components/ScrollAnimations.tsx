"use client";

/**
 * ScrollAnimations
 *
 * Drop-in client component that:
 *  1. Imports scroll-animations.css (which fixes the scroll-behavior warning
 *     and defines the reveal transition styles).
 *  2. Runs an IntersectionObserver on every [data-reveal] element and flips
 *     them to data-reveal="visible" once they enter the viewport.
 *  3. Decorates key page sections with data-reveal (+ optional dir/delay)
 *     so they animate in as the user scrolls — without touching any existing
 *     source files.
 *
 * Usage: imported once in app/layout.tsx alongside the existing components.
 */

import { useEffect } from "react";
import "../app/scroll-animations.css";

export default function ScrollAnimations() {
  useEffect(() => {
    // ── Step 1: Decorate semantic sections & cards with reveal attributes ──
    //
    // We target elements by their existing structure / class signatures so we
    // never have to edit any source file.  The selectors are intentionally
    // specific enough not to accidentally catch unrelated elements.

    const decorateReveal = () => {
      // Section headings (the small ALL-CAPS label + h2 pairs)
      document
        .querySelectorAll<HTMLElement>("section > div > div.text-center")
        .forEach((el) => {
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "");
            el.setAttribute("data-reveal-dir", "up");
          }
        });

      // Stat tiles in the dark strip
      document
        .querySelectorAll<HTMLElement>("section.bg-\\[var\\(--color-charcoal\\)\\] > div > div")
        .forEach((el, i) => {
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "");
            el.setAttribute("data-reveal-dir", "up");
            el.setAttribute("data-reveal-delay", String(i + 1));
          }
        });

      // Service cards, promise cards, testimonial cards — any direct grid children
      document
        .querySelectorAll<HTMLElement>(
          "section .grid > a, section .grid > div"
        )
        .forEach((el, i) => {
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "");
            el.setAttribute("data-reveal-dir", "up");
            // Stagger up to delay=4 then repeat
            el.setAttribute("data-reveal-delay", String((i % 4) + 1));
          }
        });

      // CTA banner
      document
        .querySelectorAll<HTMLElement>("section > div.rounded-3xl")
        .forEach((el) => {
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "");
            el.setAttribute("data-reveal-dir", "scale");
          }
        });

      // Hero content — slide up gently
      document
        .querySelectorAll<HTMLElement>("section.relative > div.relative.max-w-6xl > div")
        .forEach((el, i) => {
          if (!el.hasAttribute("data-reveal")) {
            el.setAttribute("data-reveal", "");
            el.setAttribute("data-reveal-dir", "up");
            el.setAttribute("data-reveal-delay", String(i + 1));
          }
        });
    };

    decorateReveal();

    // Re-run after a tick to catch any late-hydrated content
    const decorateTimer = setTimeout(decorateReveal, 300);

    // ── Step 2: Observe all [data-reveal] elements ──
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).setAttribute("data-reveal", "visible");
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      {
        threshold: 0.12,      // trigger when 12% of the element is visible
        rootMargin: "0px 0px -40px 0px", // slight bottom offset for a nicer feel
      }
    );

    const observeAll = () => {
      document.querySelectorAll("[data-reveal]").forEach((el) => {
        // Don't re-observe already-visible elements
        if (el.getAttribute("data-reveal") !== "visible") {
          observer.observe(el);
        }
      });
    };

    observeAll();
    const observeTimer = setTimeout(observeAll, 350);

    return () => {
      clearTimeout(decorateTimer);
      clearTimeout(observeTimer);
      observer.disconnect();
    };
  }, []);

  // This component renders nothing — it only runs side-effects.
  return null;
}
