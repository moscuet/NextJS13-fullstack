import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";


type ApiResponseData = {
    similarity?: number; 
    message?: string; 
  };

  
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponseData>
  ) {
    if (req.method === 'POST') {
      const { text1, text2 } = req.body;
  
      try {
        const response = await axios.post('https://textsimilarityapi-eight.vercel.app/api/v1/similarity', {
          text1,
          text2,
        }, {
          headers: { Authorization: process.env.TEST_API_KEY }, 
        });
  
        res.status(200).json(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          console.error(error);
          res.status(error.response?.status || 500).json({ message: 'Error fetching similarity' });
        } else {
          console.error('An unexpected error occurred:', error);
          res.status(500).json({ message: 'An unexpected error occurred' });
        }
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  