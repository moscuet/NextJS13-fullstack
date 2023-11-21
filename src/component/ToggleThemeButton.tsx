'use client'

import * as React from 'react'
import { useTheme } from 'next-themes'


import { Button } from './ui/Button'
import Icons from './Icons'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/DropDownMenu'
import { useEffect } from 'react'

export function ToggleThemeButton() {
  const { theme, setTheme, systemTheme } = useTheme();

  const renderIcon = () => {
    if (theme === 'system') {
      return <Icons.Laptop />;
    } else if (theme === 'dark') {
      return <Icons.Moon />;
    } else {
      return <Icons.Sun />;
    }
  };
  useEffect(() => {
    console.log("Current theme:", theme);
  }, [theme]); 
  
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='ghost' size='sm'>
            {renderIcon()} 
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>

      <DropdownMenuContent align='end' forceMount>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Icons.Sun className='mr-2 h-4 w-4' />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Icons.Moon className='mr-2 h-4 w-4' />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Icons.Laptop className='mr-2 h-4 w-4' />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}