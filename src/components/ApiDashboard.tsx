import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { formatDistance } from 'date-fns'
import { getServerSession } from 'next-auth'
import { notFound } from 'next/navigation'
import Paragraph from '@/ui/Paragraph'
import LargeHeading from '@/components/LargeHeading'
import { Input } from '@/ui/Input'
import Table from '@/ui/Table'
import ApiKeyOptions from '@/components/APIKeyOptions'

const ApiDashboard = async ({}) => {
  const user = await getServerSession(authOptions)
  if (!user) return notFound()
  const apiKeys = await db.apiKey.findMany({
    where: { userId: user.user.id },
  })


  const allApiKeys = await db.apiKey.findMany({where:{
    userId:user.user.id
  }});
  
  const allApiRequests = await db.apiRequest.findMany();
 

const activeApiKey = apiKeys.find((key) => key.enabled)

  if (!activeApiKey) return notFound()
  
  const userRequests = await db.apiRequest.findMany()

  const serializableRequests = userRequests.map((req) => ({
    ...req,
    timestamp: formatDistance(new Date(req.timestamp), new Date()),
  }))


  return (
    <div className='container flex flex-col gap-6'>
      <LargeHeading>Welcome back, {user.user.name}!</LargeHeading>
      <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center'>
        <Paragraph>Your Generated API key</Paragraph>
        <Input className='w-fit truncate' readOnly value={activeApiKey.key} />
        <ApiKeyOptions apiKeyId= {activeApiKey.id}apiKey={activeApiKey.key} />
      </div>

      <Paragraph className='mt-4 -mb-4 text-center md:text-left'>
        Generated API key history
      </Paragraph>

      <Table userRequests={serializableRequests} />
    </div>
  )
}

export default ApiDashboard