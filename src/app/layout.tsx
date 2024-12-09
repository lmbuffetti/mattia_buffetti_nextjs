import '@/assets/styles/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

import Sidebar from '@/components/Navigation/Sidebar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const title = 'Mattia Buufetti - Web Deceloper'
const description = 'Mattia Buufetti - Web Deceloper & Full stack Developer'

export const metadata: Metadata = {
  title,
  description,
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
  metadataBase: new URL('https://nextjs-postgres-auth.vercel.app'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Script
          strategy="beforeInteractive"
          src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
        />
      </head>
      <body
        className={`${inter.variable} overflow-x-hidden-hidden w-full`}
        suppressHydrationWarning={true}
      >
        <NextTopLoader />
        <div className="flex">
          <Sidebar />
          <div className="w-full">{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}
