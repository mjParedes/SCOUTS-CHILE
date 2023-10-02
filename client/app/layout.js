import Footer from '@/components/Footer/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Asociación de Guias y Scouts de Chile - Programas Internacionales',
  description: 'Asociación de Guias y Scouts de Chile',
  keywords: ['scouts', 'scouts chile', 'guias y scouts', 'programas internacionales']
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
