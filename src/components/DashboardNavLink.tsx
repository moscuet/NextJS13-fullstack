'use client'

import Link from "next/link";
import { buttonVariants } from "./ui/Button";
import SignOutButton from "./SignOutButton";
import SignInButton from "./SignInButton";
import { usePathname } from 'next/navigation';

const DashboardNavLink = ({ session }: { session: boolean }) => {
  const currentRoute = usePathname();
  const handleDashboardClick = () => {
    if (typeof window !== "undefined") {
      if (currentRoute === '/dashboard') window.location.href = '/dashboard';
    }
  };

  return (

    <div className='hidden md:flex gap-2'>

      <Link
        href={"/"}
        className={buttonVariants({ variant: 'default', size: 'wide', isActive: currentRoute === '/' })}
      >
        Home
      </Link>

      <Link
        onClick={handleDashboardClick}
        href={"/dashboard"}
        className={buttonVariants({ variant: 'default', size: 'md', isActive: currentRoute === '/dashboard' })}
      >
        Dashboard

      </Link>

      <Link
        href='/documentations'
        className={`${buttonVariants({
          variant: 'default',
          size: 'md',
          isActive: currentRoute === '/documentations'
        })}`}
      >
        Documentation
      </Link>

      {session ? (
        <>
          <SignOutButton />
        </>
      ) : (
        <SignInButton isActive={currentRoute === '/login'} />
      )}
    </div>

  );
};

export default DashboardNavLink;
