import { NextApiRequest, NextApiResponse } from 'next';
export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch(
      'https://api.pexels.com/v1/curated?per_page=1',
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_IMAGE_KEY}`,
        },
      }
    );

    const data = await response.json();
    // res.json(data);
    console.log(data)
  } catch (error) {
    console.log(error)
    // res.json({ error: 'An error occurred while fetching data' });
  }
}
