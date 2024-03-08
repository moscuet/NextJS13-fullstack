'use client'

import { Home, FileText, LogIn, LogOut, Info, LayoutDashboard, Loader2, Menu, User } from 'lucide-react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from './ui/DropDownMenu'
import { toast } from './ui/Toast'
interface HamburgerIconProps {
    onClick: () => void;
}



const MobileMenu = () => {
    const { data: session } = useSession()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)

    const signUserOut = async () => {
        try {
            setIsLoading(true)
            await signOut()
        } catch (error) {
            toast({
                title: 'Error signing out',
                message: 'Please try again later.',
                type: 'error',
            })
        }
    }

    return (
        <nav className='md:hidden flex justify-center'>
            <div className='shadow-2xl rounded-md outline outline-2 outline-white dark:outline-slate-900'>
                <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger asChild onClick={() => setOpen((prev) => !prev)}>
                        <Menu className="text-indigo-500 border-none w-7 h-7" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='w-56'>
                        <DropdownMenuGroup onClick={() => setOpen(false)}>

                        <DropdownMenuItem asChild>
                                    <Link
                                        href='/'
                                        className='w-full flex items-center gap-1.5'>
                                        <Home className='mr-2 h-5 w-5' />
                                        <span>Home</span>
                                    </Link>
                            </DropdownMenuItem>

                            {session ?
                                <DropdownMenuItem asChild onClick={signUserOut} className='gap-1.5'>
                                <div className='block'>
                                <LogOut className='mr-2 h-5 w-5' />
                                    <span>{isLoading ? 'Signing out' : 'Sign out'}</span>
                                    {isLoading ? (
                                        <Loader2 className='animate-spin h-4 w-4' />
                                    ) : null}
                                </div>
                                </DropdownMenuItem>
                                :
                                <DropdownMenuItem asChild>
                                    <Link
                                        href='/login'
                                        className='flex w-full items-center gap-1.5'>
                                        <LogIn className='mr-2 h-5 w-5' />
                                        <span>Sign in</span>
                                    </Link>
                                </DropdownMenuItem>
                            }

                            <DropdownMenuItem asChild>
                                    <Link
                                        href='/dashboard'
                                        className='w-full flex items-center gap-1.5'>
                                        <LayoutDashboard className='mr-2 h-5 w-5' />
                                        <span>Dashboard</span>
                                    </Link>
                            </DropdownMenuItem>
                          
                           <DropdownMenuSeparator />

                            <DropdownMenuItem asChild>
                                <Link
                                    href='/documentations'
                                    className='w-full flex items-center gap-1.5'>
                                    <FileText className='mr-2 h-5 w-5' />
                                    <span>Docs</span>
                                </Link>
                            </DropdownMenuItem>

                            <DropdownMenuSeparator />

                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default MobileMenu