import { Session } from 'inspector'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
    return <ThemeProvider attribute='class' defaultTheme='system' >
        <SessionProvider> {children}</SessionProvider>
    </ThemeProvider>
}

export default Providers