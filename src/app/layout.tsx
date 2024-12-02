// These styles apply to every route in the application
import '@/assets/styles/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextTopLoader from 'nextjs-toploader'

import Sidebar from '@/components/Navigation/Sidebar'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const title = 'NextJS Login'
const description = 'NextJS Login'

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
      <body
        className={inter.variable}
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
