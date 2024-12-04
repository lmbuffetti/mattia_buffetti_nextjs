'use client'

import '@/styles/components/header.css'

import { useState } from 'react'

import Header from '@/components/Navigation/Header'
import Sidebar from '@/components/Navigation/Sidebar'

export default function Navigation() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  return (
    <div data-testid="navigation-bar">
      <Header handleOpenSidebar={() => setIsOpenSidebar(!isOpenSidebar)} />
      <Sidebar />
    </div>
  )
}
