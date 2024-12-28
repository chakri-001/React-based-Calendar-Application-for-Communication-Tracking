import { format } from 'date-fns'

export default function RecentCommunications({ communications }) {
  const sortedCommunications = communications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div className="bg-white shadow-lg sm:rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl">
      <div className="px-4 py-5 sm:px-6 bg-gradient-to-r from-indigo-500 to-indigo-600">
        <h3 className="text-lg font-medium leading-6 text-white">Recent Communications</h3>
      </div>
      <ul role="list" className="divide-y divide-gray-200">
        {sortedCommunications.map((communication, index) => (
          <li key={communication.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition-colors duration-150 ease-in-out">
            <div className="flex items-center justify-between">
              <p className="truncate text-sm font-medium text-indigo-600">{communication.companyName}</p>
              <div className="ml-2 flex flex-shrink-0">
                <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                  {communication.method}
                </p>
              </div>
            </div>
            <div className="mt-2 sm:flex sm:justify-between">
              <div className="sm:flex">
                <p className="flex items-center text-sm text-gray-500">
                  {communication.notes}
                </p>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                <p>
                  {format(new Date(communication.date), 'PPP')}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

