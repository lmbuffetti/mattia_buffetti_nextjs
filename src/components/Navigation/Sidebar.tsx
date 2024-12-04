'use client'

import '@/styles/header.css'

import Image from 'next/image'
import { useState } from 'react'

import { sidebarNavigation } from '@/components/Navigation/NavigationRoute'
import logoWhite from '@/images/logoWhite.png'

export default function Sidebar() {
  const [isOpen] = useState(false)
  return (
    <aside
      data-testid={isOpen ? 'logo-sidebar-open' : 'logo-sidebar-closed'}
      id="logo-sidebar"
      className={`z-40 h-screen w-64 ${
        isOpen ? '-translate-x-0' : '-translate-x-full'
      } hidden border-r border-gray-200 bg-white transition-transform sm:translate-x-0 md:block dark:border-gray-700 dark:bg-gray-800`}
    >
      <div className="p-5">
        <Image
          src={logoWhite}
          width={70}
          alt="Logo"
        />
      </div>
      <div className="overflow-y-auto px-3 pb-4 pt-2">
        <ul className="space-y-2 font-medium">
          {sidebarNavigation.map(({ label, icon, href }, index) => (
            <li key={index}>
              <a
                href={href}
                className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              >
                {icon}
                <span className="ml-3">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
