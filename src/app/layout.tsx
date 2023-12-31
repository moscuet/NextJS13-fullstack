import '@/styles/globals.css'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import Navbar from '@/components/NavBar'
import { Toaster } from '@/components/ui/Toast'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'


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
      <body className='min-h-screen pt-20 px-4 bg-cream-200 dark:bg-dark-slate-800 antialiased'>
        <div className='min-h-screen'
          style={{ minHeight: 'calc(100vh - 250px)' }}>
          <Providers>
            <Navbar />
            <Toaster position='bottom-right' />
            <main> {/* Adjust top padding to account for navbar height */}
              {children}
            </main>
          </Providers>
          <div className='h-40 md:hidden' />
        </div>
        <Footer />
      </body>
    </html>
  )
}
