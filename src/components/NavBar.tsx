import Link from 'next/link'
import SignInButton from '@/components/SignInButton'
import SignOutButton from '@/components/SignOutButton'
import { buttonVariants } from '@/ui/Button'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'


import dynamic from 'next/dynamic';

const ToggleThemeButton = dynamic(() => import('./ToggleThemeButton'), { ssr: false });
const DashboardLink = dynamic(() => import('./dashboardlink'), { ssr: false });

const Navbar = async () => {

  const session = await getServerSession(authOptions)

  return (
    <div className='fixed backdrop-blur-sm bg-slate-200/75 dark:bg-slate-900/75 z-50 top-0 left-0 mb-20 right-0 h-20 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center'>

        <Link href='/' passHref>
          Logo
        </Link>

        <div className='md:hidden'>
          <ToggleThemeButton />
        </div>

        <div className='hidden md:flex gap-4'>
          <ToggleThemeButton />
          <DashboardLink />

          <Link
            href='/documentations'
            className={buttonVariants({ variant: 'ghost' })}>
            Documentation
          </Link>

          {session ? (
            <>
              <SignOutButton />
            </>
          ) : (
            <SignInButton />
          )}

        </div>


      </div>
    </div>
  )
}

export default Navbar