import { NavItem } from '@/app/lib/contants';
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function ProfileDropDown() {
  const t = useTranslations('Header');

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  const dropDownLinks: NavItem[] = [
    { name: t('profile'), href: '/member/profile' },
    { name: t('settings'), href: '/member/settings' },
    { name: t('signOut'), href: '/member/signOut' },
  ];

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </MenuButton>
      </div>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          {dropDownLinks.map((link, index) => {
            return (
              <MenuItem key={index}>
                {({ focus }) => (
                  <Link
                    href={link.href}
                    className={classNames(
                      focus ? 'bg-gray-100' : '',
                      'block px-4 py-2 text-sm text-gray-700',
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </MenuItem>
            );
          })}
        </MenuItems>
      </Transition>
    </Menu>
  );
}
