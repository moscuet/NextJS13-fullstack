import { z } from 'zod'
import { getServerSession } from 'next-auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { authOptions } from '@/lib/auth'
import { db } from '@/lib/db'
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { RevokedApiDataType } from '@/types/api'

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<RevokedApiDataType>
) => {
    try {
        const user = await getServerSession(request, response, authOptions).then(response => response?.user)

        if (!user) {
            return response.status(404).json({ success: false, error: 'Invalid user' })
        }

        const currentApiKey = await db.apiKey.findFirst({
            where: { userId: user.id, enabled: true },
        })

        if (!currentApiKey) {
            return response
                .status(400)
                .json({ success: false, error: 'This is not active API key, could not be revoked.' })
        }

        await db.apiKey.update({
            where: { id: currentApiKey.id },
            data: {
                enabled: false,
            },
        })

        return response.status(200).json({ success: true , error: null})
    } catch (error) {
        if (error instanceof z.ZodError) {
            return response.status(400).json({ error: error.issues, success: false })
        }

        return response
            .status(500)
            .json({ error: 'Internal Server Error', success: false })
    }
}

export default withMethods(['POST'], handler)