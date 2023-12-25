import { z } from 'zod'
import { nanoid } from 'nanoid'
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { GeneratedApiDataType } from '@/types/api';

const handler = async (
    request: NextApiRequest,
    response: NextApiResponse<GeneratedApiDataType>
) => {
    try {
        const user = await getServerSession(request, response, authOptions).then(response => response?.user)
        if (!user) {
            return response.status(400).json({
                generatedApiKey: null,
                error: 'Invalid user'
            })
        }
        const currentApiKey = await db.apiKey.findFirst({
            where: { userId: user.id, enabled: true }
        })

        if (currentApiKey) {
            return response.status(400).json({
                generatedApiKey: null,
                error: 'You already have an active valid Api key'
            })
        }
        const generatedApiKey = await db.apiKey.create({
            data: {
                userId: user?.id,
                key: nanoid()
            }
        })
        return response.status(200).json({
            generatedApiKey,
            error: null
        })
    }

    catch (error) {
        if (error instanceof z.ZodError) {
            return response.status(400).json({ generatedApiKey: null, error: error.issues })
        }

        return response
            .status(500)
            .json({ generatedApiKey: null, error: 'Internal Server Error' })
    }
}

export default withMethods(['GET'], handler)