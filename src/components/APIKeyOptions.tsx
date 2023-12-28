'use client'

import { FC, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/DropDownMenu'
import { Button } from '@/ui/Button'
import { toast } from '@/ui/Toast'

import { generateApiKey } from '@/helpers/generateApiKey'
import { revokeApiKey } from '@/helpers/revokeApiKey'

interface ApiKeyOptionsProps {
    // passing of entire object not allowed due to date property not being serializable
    apiKey: string;
    apiKeyId:string;
}

const ApiKeyOptions: FC<ApiKeyOptionsProps> = ({ apiKey, apiKeyId }) => {
    const router = useRouter()
    const [isGeneratingNew, setIsGeneratingNew] = useState<boolean>(false)
    const [isRevokingKey, setIsRevokingKey] = useState<boolean>(false)

    const createNewApiKey = async () => {
        setIsGeneratingNew(true)
        try {
            await revokeApiKey({apiKeyId})
            await generateApiKey()
            router.refresh()
        } catch (error) {
            toast({
                title: 'Error in generating new API key',
                message: 'Please try again later.',
                type: 'error',
            })
        } finally {
            setIsGeneratingNew(false)
        }
    }

    const revokeCurrentApiKey = async () => {
        setIsRevokingKey(true)
        try {
            await revokeApiKey({apiKeyId})
            router.refresh()
        } catch (error) {
            toast({
                title: 'Error in revoking  API key',
                message: 'Please try again later.',
                type: 'error',
            })
        } finally {
            setIsRevokingKey(false)
        }
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger disabled={isGeneratingNew || isRevokingKey} asChild>
                <Button variant='ghost' className='flex gap-2 items-center'>
                    <p>
                        {isGeneratingNew
                            ? 'Generating new API key'
                            : isRevokingKey
                                ? 'Revoking the API key'
                                : 'Options'}
                    </p>
                    {isGeneratingNew || isRevokingKey ? (
                        <Loader2 className='animate-spin h-4 w-4' />
                    ) : null}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem
                    onClick={() => {
                        navigator.clipboard.writeText(apiKey)

                        toast({
                            title: 'Copied',
                            message: 'API key copied to clipboard',
                            type: 'success',
                        })
                    }}>
                    Copy API Key
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={createNewApiKey}>
                    Create new API key
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={revokeCurrentApiKey}>
                    Revoke API key
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ApiKeyOptions