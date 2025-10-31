'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ComingSoonIcon, DownloadIcon, HomeIcon, MoreIcon, SearchIcon } from '@/app/assets/svgs/navigation';

const BottomNav = () => {
  const pathname = usePathname();

  // 랜딩페이지에서는 BottomNav를 표시하지 않음
  if (pathname === '/') {
    return null;
  }

  const menuItems = [
    { href: '/home', label: 'Home', Icon: HomeIcon },
    { href: '/search', label: 'Search', Icon: SearchIcon },
    { href: '/downloads', label: 'Downloads', Icon: DownloadIcon },
    { href: '/comingsoon', label: 'Coming Soon', Icon: ComingSoonIcon },
    { href: '/more', label: 'More', Icon: MoreIcon },
  ];

  const isActive = (href: string) => {
    if (href === '/home' && (pathname === '/' || pathname === '/home')) return true;
    if (href !== '/home' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="absolute bottom-0 left-0 right-0 z-50 bg-gray-500">
      <div className="flex items-center justify-around px-6 py-2">
        {menuItems.map((item) => {
          const { Icon } = item;
          const active = isActive(item.href);
          const color = active ? 'var(--color-white)' : 'var(--color-gray-200)';

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center min-w-0 flex-1 py-2"
            >
              <div className="w-6 h-6 mb-1 flex items-center justify-center">
                <Icon color={color} />
              </div>
              <span className="text-caption4 text-center leading-tight" style={{ color }}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
