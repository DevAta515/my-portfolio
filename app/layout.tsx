import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SmokeCursor from '@/components/smoke-cursor'
import ThreeBackground from '@/components/three-background'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ata Ur Rehman - Full Stack Developer & AI Specialist',
  description: 'Full Stack Developer & AI Specialist specializing in React, Next.js, Node.js, and AI integration. Building scalable web applications and intelligent software solutions.',
  keywords: [
    'Full Stack Developer',
    'AI Specialist',
    'React Developer',
    'Next.js Developer',
    'Node.js Developer',
    'Machine Learning',
    'Web Development',
    'Software Engineer',
    'JavaScript Developer',
    'TypeScript Developer'
  ].join(', '),
  authors: [{ name: 'Ata Ur Rehman' }],
  creator: 'Ata Ur Rehman',
  publisher: 'Ata Ur Rehman',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ataurrehman.dev'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ataurrehman.dev',
    title: 'Ata Ur Rehman - Full Stack Developer & AI Specialist',
    description: 'Full Stack Developer & AI Specialist specializing in React, Next.js, Node.js, and AI integration.',
    siteName: 'Ata Ur Rehman Portfolio',
    images: [
      {
        url: '/og-image.jpg', // Create this image (1200x630px)
        width: 1200,
        height: 630,
        alt: 'Ata Ur Rehman - Full Stack Developer & AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ata Ur Rehman - Full Stack Developer & AI Specialist',
    description: 'Full Stack Developer & AI Specialist specializing in React, Next.js, Node.js, and AI integration.',
    creator: '@DevAta515',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThreeBackground />
        <SmokeCursor />
        {children}
      </body>
    </html>
  )
}