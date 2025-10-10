import Link from 'next/link';
import { INavmenuItemList } from '@/interface/INavmenuItemList';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '../ui/navigation-menu';
import { navmenuItemListData } from '@/data/navmenuItemListData';

const menuItems: INavmenuItemList[] = navmenuItemListData;

export default function MobileNav() {
  return (
    <NavigationMenu className="mr-8 md:hidden">
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
  );
}
