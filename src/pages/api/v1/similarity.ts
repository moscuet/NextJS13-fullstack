import { z } from 'zod';
import { NextApiRequest, NextApiResponse } from 'next';
import openai from '@/lib/openAi';
import { db } from '@/lib/db';
import { withMethods } from '@/lib/api-middlewares/with-methods';
import { cosineSimilarity } from '@/helpers/cosine-sim';

const requestSchema = z.object({
  text1: z.string().max(500),
  text2: z.string().max(500),
});

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const body = request.body as unknown;
  const apiKey = request.headers.authorization;

  if (!apiKey) {
    return response.status(401).json({ error: 'Unauthorized Request' });
  }

  try {
    const { text1, text2 } = requestSchema.parse(body);
   
    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    });

    if (!validApiKey) {
      return response.status(401).json({ error: 'Unauthorized: Invalid api key' });
    }

    const start = new Date()
   
    const embeddings = await Promise.all(
      [text1,text2].map(async (text) => {
          const response = await openai.embeddings.create({
            model: "text-embedding-ada-002",
            input: text
          });
          return response.data[0].embedding;
      })
    );

    const similarity = cosineSimilarity(embeddings[0], embeddings[1]);

    const duration = new Date().getTime() - start.getTime();

    await db.apiRequest.create({
      data: {
        duration,
        method: request.method as string,
        path: request.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    });

    return response.status(200).json({ success: true, text1, text2, similarity });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({ error: error.issues });
    }

    return response.status(500).json({ error });
  }

};

export default withMethods(['POST'], handler);