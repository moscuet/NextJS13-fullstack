'use client'

import { FC, useState } from 'react'
import { Key } from 'lucide-react'
import { generateApiKey } from '@/helpers/generateApiKey'
import { toast } from '@/ui/Toast'
import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/ui/Paragraph'
import { Button } from '@/ui/Button'
import CopyButton from '@/components/CopyButton'
import { Input } from '@/ui/Input'

interface RequestApiKeyProps {}

const ApiKeyRequestComp: FC<RequestApiKeyProps> = ({}) => {
  const [isKeyCreating, setIsKeyCreating] = useState<boolean>(false)
  const [apiKey, setApiKey] = useState<string | null>(null)

  async function generateNewApiKey(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsKeyCreating(true)

    try {
      const generatedApiKey = await generateApiKey()
      setApiKey(generatedApiKey)
    } catch (error) {
      if (error instanceof Error) {
        toast({
          title: 'Error in Generating Api key',
          message: error.message,
          type: 'error',
        })
        return
      }

      toast({
        title: 'Error',
        message: 'Failed to generate Api key',
        type: 'error',
      })
    } finally {
      setIsKeyCreating(false)
    }
  }

  return (
    <div className='container md:max-w-2xl'>
      <div className='flex flex-col gap-6 items-center'>
        <Key className='mx-auto h-12 w-12 text-gray-400' />
        <LargeHeading className='text-center'>
          Request an API key
        </LargeHeading>
        <Paragraph>You don&apos;t have an active API key yet</Paragraph>
      </div>
      <form
        onSubmit={generateNewApiKey}
        className='sm:flex sm:items-center mt-6'
        action='#'>
        <label htmlFor='emails' className='sr-only'>
          Generated API key
        </label>
        <div className='relative shadow-sm  rounded-md sm:min-w-0 sm:flex-1'>
          {apiKey ? (
            <CopyButton
              className='absolute right-0 inset-y-0  fade-in animate-in duration-300'
              valueToCopy={apiKey}
            />
          ) : null}
          <Input
            readOnly
            value={apiKey ?? ''}
            placeholder='Request to generate an Api key & display here'
          />
        </div>
        <div className='flex justify-center sm:flex-shrink-0 sm:ml-4 sm:mt-0  mt-6'>
          <Button disabled={!!apiKey} isLoading={isKeyCreating}>
            Request Api key
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ApiKeyRequestComp