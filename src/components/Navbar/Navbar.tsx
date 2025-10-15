'use client';

import React, { useEffect, useRef, useState } from 'react';
import ThemeToggle from '../ThemeToggle';

export default function Navbar({ children }: { children?: React.ReactNode }) {
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);

  // threshold before hide (px)
  const HIDE_AFTER = 80;

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;

      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (currentY > lastY.current && currentY > HIDE_AFTER) {
            setHidden(true);
          } else {
            setHidden(false);
          }
          lastY.current = currentY <= 0 ? 0 : currentY;
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      className={`fixed top-0 right-0 left-0 z-50 transform border-b bg-white/10 backdrop-blur-sm transition-transform duration-300 motion-safe:transition-transform ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden={hidden}
    >
      <div className="mx-auto flex max-w-[1440px] items-center px-4 py-4 md:gap-8">
        <h1 className="text-xl">&lt;EF/&gt;</h1>

        <div className="flex flex-1 items-center justify-end md:justify-start">
          {children}
        </div>

        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </section>
  );
}
