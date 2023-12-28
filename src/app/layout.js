import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ofertas',
  description: 'Las mejores ofertas de san rafael',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth w'>


      <body className={inter.className}>
        <main className='max-w-full mx-auto'>
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
