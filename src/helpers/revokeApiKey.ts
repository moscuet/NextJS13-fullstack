export async function revokeApiKey({apiKeyId}:{apiKeyId:string}) {
    const response = await fetch('/api/api-key/revoke', {
      method: 'POST',
      headers:{
        'content-type': 'applications/json',
      },
      body:JSON.stringify({apiKeyId})
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
  
    const data = (await response.json()) as { error?: string };
  
    if (data.error) {
      throw new Error(data.error);
    }
  }
  