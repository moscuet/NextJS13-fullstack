import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import dynamic from 'next/dynamic';
import { FC } from 'react';
import MobileMenu from './mobileMenu';

const ToggleThemeButton = dynamic(() => import('./ToggleThemeButton'), {
  ssr: false,
});
const DashboardNavLink = dynamic(() => import('./DashboardNavLink'), {
  ssr: false,
});

const Navbar: FC = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div className='fixed z-50 backdrop-blur-sm  bg-slate-200/75 dark:bg-slate-900/75 top-0 left-0 mb-20 right-0 h-20 shadow-sm flex items-center justify-between'>
      <div className='container max-w-7xl mx-auto w-full flex justify-between items-center pr-2'>
       
        <div className='flex items-center gap-8'>
          <Link href='/' passHref>
            <span className="text-indigo-500 cursor-pointer">LOGO</span>
          </Link>
          <ToggleThemeButton />
        </div>
        <div>
        <MobileMenu />
        <DashboardNavLink session={session ? true : false} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
