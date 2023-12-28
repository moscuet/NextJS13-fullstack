'use client'

import { FC, useState } from 'react'
import {signIn} from 'next-auth/react'
import { Button } from '@/ui/Button'
import { toast } from '@/ui/Toast'
interface SignInButtonProps {
  
}

const SignInButton: FC<SignInButtonProps> = ({}) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
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
   return <Button onClick={signInWithGoogle} isLoading={isLoading}>Sign in</Button>

}

export default SignInButton