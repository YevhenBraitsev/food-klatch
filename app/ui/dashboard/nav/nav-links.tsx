'use client';

import {
  CakeIcon,
  DocumentDuplicateIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import NavLink from './nav-link';

const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Dishes',
    href: '/dashboard/dishes',
    icon: CakeIcon,
  },
  {
    name: 'Products',
    href: '/dashboard/products',
    icon: DocumentDuplicateIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        return <NavLink key={link.name} link={link} />;
      })}
    </>
  );
}
