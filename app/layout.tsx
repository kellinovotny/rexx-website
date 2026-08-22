import type { Metadata } from 'next'
import { Manrope, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const manrope = Manrope({
  subsets: ["latin"],
  variable: '--font-manrope',
})

// globals.css already points --font-mono at 'Geist Mono' but it was never loaded.
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: '--font-geist-mono',
})

const SITE_URL = 'https://therexxapp.com'
const SITE_TITLE = 'Rexx - Never Forget a Recommendation'
const SITE_DESCRIPTION =
  'Books, movies, restaurants, music, and more. From the people you trust. People over algorithms.'
// Relative path resolves against metadataBase below, so link previews get an absolute URL.
const SITE_OG_IMAGE = '/og.png'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: 'Rexx',
    locale: 'en_US',
    type: 'website',
    images: [{ url: SITE_OG_IMAGE, width: 1200, height: 630, alt: SITE_TITLE }],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [SITE_OG_IMAGE],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${geistMono.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
