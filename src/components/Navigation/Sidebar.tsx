'use client'

import '@/styles/header.css'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  contactNavigation,
  sidebarNavigation,
} from '@/components/Navigation/NavigationRoute'
import logoWhite from '@/images/logoWhite.png'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])
  return (
    <>
      <div className="relative block md:hidden">
        <input
          id="menu__toggle"
          type="checkbox"
          onChange={e => setIsOpen(e.target.checked)}
          checked={isOpen}
        />
        <label
          className="menu__btn"
          htmlFor="menu__toggle"
        >
          <span />
        </label>
      </div>
      <aside
        data-testid={isOpen ? 'logo-sidebar-open' : 'logo-sidebar-closed'}
        id="logo-sidebar"
        className={`z-40 h-screen w-64 ${
          isOpen ? 'left-0 w-full -translate-x-0' : '-translate-x-full'
        } fixed h-full border-r border-gray-200 bg-white transition-transform sm:translate-x-0 md:relative md:block dark:border-gray-700 dark:bg-gray-800`}
      >
        <div className="p-5 pt-16 md:pt-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src={logoWhite}
              width={70}
              alt="Logo"
            />
          </Link>
        </div>
        <div className="mt-16 overflow-y-auto px-3 pb-4 pt-2">
          <ul className="space-y-2 font-medium">
            {sidebarNavigation.map(({ label, icon, href }, index) => (
              <li key={index}>
                <Link
                  onClick={() => setIsOpen(false)}
                  href={href}
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {icon}
                  <span className="ml-3">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 overflow-y-auto px-3 pb-4 pt-2">
          <ul className="flex font-medium">
            {contactNavigation.map(({ icon, href }, index) => (
              <li
                key={index}
                className="mx-1"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href={href}
                  className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                >
                  {icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}
