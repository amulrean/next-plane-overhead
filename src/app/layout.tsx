import NavBar from '@/components/nav-bar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <header>
          <NavBar></NavBar>
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
