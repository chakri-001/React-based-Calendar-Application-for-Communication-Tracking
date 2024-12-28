import fs from 'fs'
import path from 'path'

const dbPath = path.join(process.cwd(), 'data', 'db.json')

type Company = {
  id: string
  name: string
  email: string
  phone: string
  communicationPeriodicity: number
  lastCommunication?: string
}

type Communication = {
  id: string
  companyId: string
  date: string
  method: string
  notes: string
}

type DB = {
  companies: Company[]
  communications: Communication[]
}

function readDB(): DB {
  if (!fs.existsSync(dbPath)) {
    return { companies: [], communications: [] }
  }
  const data = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(data)
}

function writeDB(db: DB) {
  fs.writeFileSync(dbPath, JSON.stringify(db, null, 2))
}

export async function getCompanies(): Promise<Company[]> {
  const db = readDB()
  return db.companies
}

export async function getCommunications(): Promise<Communication[]> {
  const db = readDB()
  return db.communications
}

export async function addCompany(company: Omit<Company, 'id'>): Promise<Company> {
  const db = readDB()
  const newCompany = { ...company, id: Date.now().toString() }
  db.companies.push(newCompany)
  writeDB(db)
  return newCompany
}

export async function addCommunication(communication: Omit<Communication, 'id'>): Promise<Communication> {
  const db = readDB()
  const newCommunication = { ...communication, id: Date.now().toString() }
  db.communications.push(newCommunication)
  
  // Update the company's last communication date
  const companyIndex = db.companies.findIndex(c => c.id === communication.companyId)
  if (companyIndex !== -1) {
    db.companies[companyIndex].lastCommunication = communication.date
  }
  
  writeDB(db)
  return newCommunication
}

