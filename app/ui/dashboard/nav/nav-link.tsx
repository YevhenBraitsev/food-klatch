import { TNavLink } from '@/app/lib/definitions';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ link }: { link: TNavLink }) {
  const LinkIcon = link.icon;
  const pathname = usePathname();
  return (
    <Link
      key={link.name}
      href={link.href}
      className={clsx(
        'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-block p-3 text-sm font-medium hover:bg-primary hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
        {
          'bg-primary text-white': pathname === link.href,
        },
      )}
    >
      <LinkIcon className="w-6" />
      <p className="hidden md:block">{link.name}</p>
    </Link>
  );
}
