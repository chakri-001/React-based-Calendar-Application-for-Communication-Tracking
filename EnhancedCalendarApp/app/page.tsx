import { getCompanies, getCommunications } from '../lib/db'
import DashboardStats from './components/DashboardStats'
import RecentCommunications from './components/RecentCommunications'
import UpcomingCommunications from './components/UpcomingCommunications'

export default async function Home() {
  const companies = await getCompanies()
  const communications = await getCommunications()

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Dashboard</h1>
      <DashboardStats companies={companies} communications={communications} />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <RecentCommunications communications={communications} />
        <UpcomingCommunications companies={companies} communications={communications} />
      </div>
    </div>
  )
}

