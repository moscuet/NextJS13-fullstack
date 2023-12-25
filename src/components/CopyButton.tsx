'use client'

import { Copy } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'
import { cn } from '@/lib/utils'
import { toast } from './ui/Toast'
import { Button } from './ui/Button'

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  valueToCopy: string
}

const CopyButton: FC<CopyButtonProps> = ({
  valueToCopy,
  className,
  ...props
}) => {
  return (
    <Button
      {...props}
      type='button'
      onClick={() => {
        navigator.clipboard.writeText(valueToCopy)

        toast({
          title: 'Key Copied',
          message: 'API key copied to clipboard',
          type: 'success',
        })
      }}
      variant='ghost'
      className={cn('', className)}>
      <Copy className='h-5 w-5' />
    </Button>
  )
}

export default CopyButton