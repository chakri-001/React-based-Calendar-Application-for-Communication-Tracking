import { getCompanies, getCommunications } from '../../lib/db'
import CalendarView from '../components/CalendarView'

export default async function CalendarPage() {
  const companies = await getCompanies()
  const communications = await getCommunications()

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Communication Calendar</h1>
      <CalendarView companies={companies} communications={communications} />
    </div>
  )
}

