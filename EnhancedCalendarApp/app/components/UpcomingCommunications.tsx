import { format, addDays } from 'date-fns'

export default function UpcomingCommunications({ companies, communications }) {
  const upcomingCommunications = companies.map(company => {
    const lastCommunication = communications
      .filter(c => c.companyId === company.id)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0]

    const nextDueDate = lastCommunication
      ? addDays(new Date(lastCommunication.date), company.communicationPeriodicity)
      : new Date()

    return {
      ...company,
      nextDueDate,
    }
  }).sort((a, b) => a.nextDueDate.getTime() - b.nextDueDate.getTime())
    .slice(0, 5)

  return (
    <div className="bg-white shadow-lg sm:rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl">
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <h3 className="text-lg font-medium leading-6 text-white">Upcoming Communications</h3>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {upcomingCommunications.map((company, index) => (
          <li key={company.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
            <div className="flex items-center justify-between">
              <p className="truncate text-sm font-medium text-yellow-600">{company.name}</p>
              <div className="ml-2 flex flex-shrink-0">
                <p className="inline-flex rounded-full bg-yellow-100 px-2 text-xs font-semibold leading-5 text-yellow-800">
                  Due: {format(company.nextDueDate, 'PP')}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  {company.email}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p>
                  Every {company.communicationPeriodicity} days
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

