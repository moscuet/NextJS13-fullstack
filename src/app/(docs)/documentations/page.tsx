import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'


export const metadata: Metadata = {
    title: 'documentations',
    description: ' Dcoumention of Similarity API'
}


const page: FC = () => {
    return <div className='container max-w-7xl w-full mx-auto h-full'>
        <LargeHeading>Making API Request</LargeHeading>
        <Paragraph className="max-w-full">api/v1/similarity</Paragraph>
        <DocumentationTabs />

    </div>
}

export default page