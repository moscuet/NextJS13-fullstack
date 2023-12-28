import * as React from 'react'

import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={cn(
          'flex w-full h-10 py-2 px-5 text-sm rounded-md border border-slate-300 bg-transparent placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-gray-200 dark:placeholder:text-gray-500 dark:focus:ring-indigo-300 dark:focus:ring-offset-slate-900',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }