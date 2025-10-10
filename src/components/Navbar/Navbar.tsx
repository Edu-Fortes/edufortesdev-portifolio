'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { INavmenuItemList } from '@/interface/INavmenuItemList';
import { navmenuItemListData } from '@/data/navmenuItemListData';

const menuItems: INavmenuItemList[] = navmenuItemListData;

export default function Navbar() {
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
      className={`fixed top-0 right-0 left-0 z-50 transform border-b bg-white/80 backdrop-blur-sm transition-transform duration-300 motion-safe:transition-transform ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      }`}
      aria-hidden={hidden}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-4">
        <h1 className="text-xl">&lt;EF/&gt;</h1>
        <NavigationMenu className="mr-8">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  {menuItems.map((item) => (
                    <li key={item.id}>
                      <NavigationMenuLink asChild>
                        <Link href={item.href}>{item.title}</Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </section>
  );
}
