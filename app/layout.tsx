import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './redux/Provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Kayky's Portfolio",
  description: "Kayky's portfolio, Fullstack developer with 2+ years of experience.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className='scroll-smooth' lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
