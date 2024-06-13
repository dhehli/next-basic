import { DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/16/solid';
import { clsx } from 'clsx';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href: string;
}

export default function NavMobile() {
  const t = useTranslations("Header");
  const pathname = usePathname();

  const links: NavItem[] = [
    { name: t('dashboard'), href: '/member/dashboard' },
    { name: t('team'), href: '/member/team' },
    { name: t('projects'), href: '/member/projects' },
  ];

  const dropDownLinks: NavItem[] = [
    { name: t('profile'), href: '/member/profile' },
    { name: t('settings'), href: '/member/settings' },
    { name: t('signOut'), href: '/member/signOut' },
  ];

  return (
    <DisclosurePanel className="md:hidden">
      <div className="space-y-1 pb-3 pt-2">
        {links.map((link) => (
          <DisclosureButton as={Link} href={link.href} key={link.href}>
            <span
              className={clsx(
                link.href === pathname
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700',
                'block border-l-4 py-2 pl-3 pr-4 text-base font-medium sm:pl-5 sm:pr-6'
              )}
            >
              {link.name}
            </span>
         
          </DisclosureButton>
        ))}
      </div>
      <div className="border-t border-gray-200 pb-3 pt-4">
        <div className="flex items-center px-4 sm:px-6">
          <div className="flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="User avatar"
            />
          </div>
          <div className="ml-3">
            <div className="text-base font-medium text-gray-800">Tom Cook</div>
            <div className="text-sm font-medium text-gray-500">tom@example.com</div>
          </div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <BellIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-3 space-y-1">
          {dropDownLinks.map((link) => (
            <DisclosureButton as={Link} href={link.href} key={link.href}>
              <span className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6">
                {link.name}
              </span>
            </DisclosureButton>
          ))}
        </div>
      </div>
    </DisclosurePanel>

        )
      }
