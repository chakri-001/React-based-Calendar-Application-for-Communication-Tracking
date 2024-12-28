import { NextApiRequest, NextApiResponse } from 'next'
import { addCommunication } from '../../lib/db'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { companyId, date, method = 'Other', notes = '' } = req.body
      const communication = await addCommunication({ companyId, date, method, notes })
      res.status(201).json(communication)
    } catch (error) {
      res.status(500).json({ error: 'Error adding communication' })
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}

