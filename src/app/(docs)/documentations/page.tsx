import { FC } from 'react'
import type { Metadata } from 'next'
import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'
import DocumentationTabs from '@/components/DocumentationTabs'


export const metadata: Metadata = {
    title: 'Text Similarity API | Documentations',
    description: 'Text similarity API',
}


const page: FC = () => {
    return <div className='flex justify-center container max-w-7xl w-full mx-auto h-full text-center'>
        <div className='max-w-4xl w-full'>
            <div className=' flex justify-center mb-4'> <LargeHeading>Making API Request</LargeHeading></div>
            <Paragraph className="max-w-full text-justify mb-5">Obtain your API key now and begin exploring the capabilities of our Text Similarity API. Discover the power of advanced analysis to effortlessly compare and uncover similarities between two pieces of text.</Paragraph>
            <DocumentationTabs />
        </div>
    </div>
}

export default page