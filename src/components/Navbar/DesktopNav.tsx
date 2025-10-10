import { navmenuItemListData } from '@/data/navmenuItemListData';
import { INavmenuItemList } from '@/interface/INavmenuItemList';
import Link from 'next/link';

export default function DesktopNav() {
  const menuItems: INavmenuItemList[] = navmenuItemListData;

  return (
    <nav className="hidden md:flex">
      <ul className="flex gap-16">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className="transition ease-in-out hover:text-gray-500"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
