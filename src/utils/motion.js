import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export { gsap, ScrollTrigger };

export const isReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

export const MOTION = {
  ease: {
    out: 'power3.out',
    inOut: 'power2.inOut',
    expo: 'expo.out',
    smooth: 'sine.out',
    spring: 'back.out(1.4)',
  },
  duration: {
    fast: 0.25,
    normal: 0.45,
    slow: 0.85,
    hero: 1.0,
  },
};

/**
 * Orchestrates GSAP ScrollTrigger card-stacking on a container of sticky cards.
 * Scales down previous cards and dims them as the next card enters view.
 */
export const setupStickyCards = (container) => {
  if (!container || isReducedMotion()) return () => {};

  const cards = container.querySelectorAll('.project-sticky-card');
  if (cards.length <= 1) return () => {};

  const ctx = gsap.context(() => {
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];
        const overlay = card.querySelector('.card-dim-overlay');

        gsap.to(card, {
          scale: 0.92,
          y: -24,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: nextCard,
            start: 'top 85%',
            end: 'top 20%',
            scrub: true,
          },
        });

        if (overlay) {
          gsap.to(overlay, {
            opacity: 0.65,
            ease: 'none',
            scrollTrigger: {
              trigger: nextCard,
              start: 'top 85%',
              end: 'top 20%',
              scrub: true,
            },
          });
        }
      }
    });
  }, container);

  return () => ctx.revert();
};
