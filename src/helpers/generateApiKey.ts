import { GeneratedApiDataType } from "@/types/api"

export async function generateApiKey() {
    const response = await fetch('api/api-key/generate')
    const data = (await response.json()) as GeneratedApiDataType

    if (data.error || !data.generatedApiKey) {
        if (data.error instanceof Array) { throw new Error(data.error.join(' . ')) }
        throw new Error(data.error ?? ' Failed to generate Api key')
    }
    return data.generatedApiKey?.key
}
