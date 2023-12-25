import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import LargeHeading from '@/components/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

export const metadata: Metadata = {
  title: 'Similarity API | Home',
  description: 'Text similarity API',
}


export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container px-4 max-w-7xl w-full mx-auto h-full'>
        <div  className='flex flex-col pt-6 lg:flex-row items-center justify-between gap-6'>

          <div className='w-full lg:w-1/2 flex flex-col items-center lg:items-start'>
            <div className='flex flex-col items-center lg:items-start'>
              <LargeHeading
                size='lg'
                className='three-d text-black dark:text-dark-indigo mb-6 text-center lg:text-left'>
                Find easily
              </LargeHeading>
              <LargeHeading
                size='lg'
                className='three-d text-black dark:text-dark-indigo mb-6 text-center lg:text-left'>
                text similarity.
              </LargeHeading>

              <Paragraph className='mx-auto max-w-xl mb-6 text-center lg:text-left'>
                With the Text Similarity API, you can easily determine the
                similarity between two pieces of text with a free{' '}
                <Link
                  href='/login'
                  className='underline underline-offset-2 text-black dark:text-dark-indigo'>
                  API key
                </Link>
              </Paragraph>
            </div>
          </div>

          <div className='w-full lg:w-1/2 max-w-xl lg:max-w-3xl aspect-square relative'>
            <Image
              priority
              className='img-shadow'
              quality={100}
              style={{ objectFit: 'contain' }}
              layout='fill'
              src='/images/typewriter.png'
              alt='typewriter'
            />
          </div>

        </div>
      </div>
    </div>
  )
}




