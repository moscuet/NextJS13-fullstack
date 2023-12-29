import { FC } from 'react'
import Link from 'next/link'
import Icons from '@/components/Icons'
import Paragraph from '@/components/ui/Paragraph'
import LargeHeading from '@/components/LargeHeading'
import { buttonVariants } from '@/components/ui/Button'
import GoogleAuthForm from '@/components/GoogleAuthForm'

const page: FC = () => {
  return (
    <>
     <div className='container max-w-7xl w-full mx-auto h-full'>
          <div className='flex flex-col items-center gap-6 text-center'>
            <Link
              className={buttonVariants({
                variant: 'ghost',
                className: 'w-fit',
              })}
              href='/'>
              <Icons.ChevronLeft className='mr-2 h-4 w-4' />
              Back to home
            </Link>

            <LargeHeading>Welcome back!</LargeHeading>
            <Paragraph>Please sign in using your Google account.</Paragraph>
          </div>
          <GoogleAuthForm />
        </div>
    </>
  )
}

export default page