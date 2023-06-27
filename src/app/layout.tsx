import NavBar from '@/components/nav-bar'
import './globals.css'

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
      <body className='flex flex-col h-screen'>
        <header>
          <NavBar></NavBar>
        </header>
        <main className='flex flex-grow'>
          {children}
        </main>
      </body>
    </html>
  )
}
