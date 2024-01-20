'use client'
import { FC, useState } from 'react'
import { signOut } from 'next-auth/react'
import { Button } from '@/ui/Button'
import { toast } from '@/ui/Toast'
interface SignOutButtonProps {
}

const SignOutButton: FC<SignOutButtonProps> = ({ }) => {

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const signOutGoggle = async () => {
        setIsLoading(true)

        try {
            await signOut()
        } catch (error) {
            toast({
                title:'Sign out Error',
                message:'Google sign-out failed. Please try again later.',
                type:'error'
            })
        }
    }
    return <Button onClick={signOutGoggle} variant={'outline'} size={'fit'}  isLoading={isLoading} isActive={false}>Sign out</Button>

}

export default SignOutButton