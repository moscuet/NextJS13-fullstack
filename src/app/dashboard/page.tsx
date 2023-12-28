import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { getServerSession } from 'next-auth'

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ApiKeyRequestComp from '@/components/ApiKeyRequestComp'
import ApiDashboard from '@/components/ApiDashboard'

export const metadata: Metadata = {
  title: 'Similarity API | Dashboard',
  description: 'Free & open-source text similarity API',
}

const page = async () => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()

  const apiKey = await db.apiKey.findFirst({
    where: { userId: user.user.id, enabled: true },
  })

  return (
     <div className='container max-w-7xl w-full mx-auto h-full'>
      {apiKey ? 
        <ApiDashboard />
       : 
        <ApiKeyRequestComp />
      }
    </div>
  )
}

export default page