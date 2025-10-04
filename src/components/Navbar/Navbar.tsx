'use client';

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

export function Navbar() {
  return (
    <div>
      <NavigationMenu>
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
  );
}
