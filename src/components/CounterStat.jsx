import React, { useRef, useEffect } from 'react';
import { gsap, ScrollTrigger, isReducedMotion } from '../utils/motion';

export default function CounterStat({
  value,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const numRef = useRef(null);

  useEffect(() => {
    const el = numRef.current;
    if (!el) return;

    if (isReducedMotion()) {
      el.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      return;
    }

    const targetNum = Number(value);
    const obj = { val: 0 };

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: 'top 90%',
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            val: targetNum,
            duration: 1.6,
            ease: 'power2.out',
            onUpdate: () => {
              if (el) {
                el.textContent = `${prefix}${obj.val.toFixed(decimals)}${suffix}`;
              }
            },
          });
        },
      });
    });

    return () => ctx.revert();
  }, [value, decimals, prefix, suffix]);

  return (
    <span ref={numRef} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
