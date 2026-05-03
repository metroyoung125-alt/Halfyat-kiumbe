import { put } from '@vercel/blob';

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  if (req.method!== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const filename = req.headers['x-vercel-filename'] || 'image.jpg';
  const blob = await put(filename, req, { access: 'public' });

  return res.status(200).json(blob);
    }
