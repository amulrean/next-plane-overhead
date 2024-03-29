import NavBar from '@/components/nav-bar'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'Next Plane Overhead',
  description: 'Side Project to Learn NextJs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='grid grid-rows-[auto,1fr] h-screen'>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          {children}
          <Analytics />
        </main>
      </body>
    </html>
  )
}
