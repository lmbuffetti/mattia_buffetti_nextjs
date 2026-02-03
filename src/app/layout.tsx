import '@/assets/styles/globals.css'

import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import NextTopLoader from 'nextjs-toploader'
import React from 'react'

import Sidebar from '@/components/Navigation/Sidebar'
import { CONTACT_EMAIL, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/url'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const socialImage = `${SITE_URL}/images/logos/react.png`
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mattia Buffetti',
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: `mailto:${CONTACT_EMAIL}`,
  jobTitle: 'Full-stack Web Developer',
  worksFor: {
    '@type': 'Organization',
    name: 'Mattia Buffetti',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IT',
  },
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: '%s | Mattia Buffetti',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Mattia Buffetti',
    'web developer',
    'frontend developer',
    'full stack developer',
    'Next.js portfolio',
  ],
  category: 'technology',
  authors: [{ name: 'Mattia Buffetti', url: SITE_URL }],
  creator: 'Mattia Buffetti',
  publisher: 'Mattia Buffetti',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
    images: [{ url: socialImage, width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: [socialImage],
  },
  icons: {
    icon: [
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/icons/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/favicon.ico', rel: 'shortcut icon' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/icons/site.webmanifest',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>{SITE_NAME}</title>
        <Script
          strategy="beforeInteractive"
          src="/vendor/tagcanvas.min.js"
          defer
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/icons/favicon.svg"
        />
        <link
          rel="shortcut icon"
          href="/icons/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="MyWebSite"
        />
        <link
          rel="manifest"
          href="/icons/site.webmanifest"
        />
        <Script
          strategy="beforeInteractive"
          src="/vendor/particles.min.js"
        />
        <meta
           name="theme-color"
           content="#0f172a"
         />
         <link
           rel="canonical"
           href={SITE_URL}
         />
         <Script
           id="ld-json"
           type="application/ld+json"
           strategy="afterInteractive"
           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
        <SpeedInsights />
      </body>
    </html>
  )
}
