import { FC } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Similarity API | Dashboard',
    description: 'Text similarity API',
  }

interface pageProps {
  
}

const page: FC<pageProps> = ({}) => {
  return <div> dashboard page</div>
}

export default page