'use client'

import Link from "next/link";
import { buttonVariants } from "./ui/Button";

const DashboardLink = () => {
    const handleDashboardClick = () => {
      if (typeof window !== "undefined") {
        window.location.href = '/dashboard'; // Force a full page reload
      }
    };
  
    return (
      <Link
        onClick={handleDashboardClick} href={""}
        className={buttonVariants({ variant: 'ghost' })}
        >
        Dashboard

      </Link>
    );
  };
  
  export default DashboardLink;
  