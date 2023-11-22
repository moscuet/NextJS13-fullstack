import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/component/NavBar'
import { Toaster } from '@/component/ui/Toast'
import Providers from '@/component/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      className={cn('bg-light-blue-100 text-gray-800 antialiased', inter.className)}>
      <body className='min-h-screen pt-20 bg-cream-200 dark:bg-dark-slate-800 antialiased'>
        <Providers>
          <Navbar />
          <Toaster position='bottom-right' />
          {/* <MobileMenu /> */}
          {children}
        </Providers>
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}
