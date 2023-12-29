'use client'

import * as React from 'react'
import { FC } from 'react'
import { signIn } from 'next-auth/react'
import { cn } from '@/lib/utils'
import { toast } from '@/ui/Toast'
import { Button } from '@/ui/Button'
import Image from 'next/image';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const  signInWithGoogle = async () =>{
        setIsLoading(true)
   
        try {
           await signIn('google')
        } catch (error) {
           toast({
               title:'Sign in Error',
               message:'Google sign-in failed. Please try again later.',
               type:'error'
           })
        }
      }

    return (
        <div className={cn('flex justify-center', className)} {...props}>
            <Button
                isLoading={isLoading}
                className='max-w-sm w-full'
                onClick={signInWithGoogle}
                disabled={isLoading}>
                {isLoading ? null :
                    <Image
                        src="/assests/svg/GoogleLoginIcon.svg"
                        alt="google icon"
                        width={20}
                        height={16}
                        style={{ marginRight: '8px' }}
                    />
                }
                Google
            </Button>

        </div>
    )
}

export default UserAuthForm