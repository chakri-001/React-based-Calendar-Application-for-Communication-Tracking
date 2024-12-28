import { getCompanies } from '../../lib/db'
import CompanyList from '../components/CompanyList'
import CompanyForm from '../components/CompanyForm'

export default async function CompaniesPage() {
  const companies = await getCompanies()

  return (
    <div className="space-y-6 animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Companies</h1>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Company List</h2>
          <CompanyList companies={companies} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Add New Company</h2>
          <CompanyForm />
        </div>
      </div>
    </div>
  )
}

