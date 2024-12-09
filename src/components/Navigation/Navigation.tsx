'use client'

import '@/styles/components/header.css'

import Sidebar from '@/components/Navigation/Sidebar'

export default function Navigation() {
  return (
    <div data-testid="navigation-bar">
      <Sidebar />
    </div>
  )
}
