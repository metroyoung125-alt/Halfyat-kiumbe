import { list } from '@vercel/blob';

export default async function handler(req, res) {
  const { blobs } = await list();
  const projects = blobs.sort((a,b) => b.uploadedAt - a.uploadedAt).map(b => b.url);
  res.status(200).json({ projects });
    }
