import { NextApiRequest, NextApiResponse } from 'next'
import { addCompany } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const company = await addCompany(req.body)
      res.status(201).json(company)
    } catch (error) {
      res.status(500).json({ error: 'Error adding company' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

