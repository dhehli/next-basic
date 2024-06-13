import { NavItem } from '@/app/lib/contants';
import { pathnameRemoveLang } from '@/app/lib/utils';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavItems() {
  const t = useTranslations('Header');
  const originalPathname = usePathname();
  const pathname = pathnameRemoveLang(originalPathname);

  const links: NavItem[] = [
    { name: t('dashboard'), href: '/member/dashboard' },
    { name: t('team'), href: '/member/team' },
    { name: t('projects'), href: '/member/projects' },
  ];

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            'inline-flex items-center px-1 pt-1 text-sm font-medium',
            {
              'border-b-2 border-indigo-500 text-gray-900':
                pathname === link.href,
              'border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700':
                pathname !== link.href,
            },
          )}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
