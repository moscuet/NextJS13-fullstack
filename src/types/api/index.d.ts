import { type ZodIssue } from 'zod'
import { ApiKey } from "@prisma/client"


interface RevokedApiDataType {
    success: boolean;
    error: string | ZodIssue[] | null;
}

interface GeneratedApiDataType {
    generatedApiKey: ApiKey | null;
    error: string | ZodIssue[] | null;
}