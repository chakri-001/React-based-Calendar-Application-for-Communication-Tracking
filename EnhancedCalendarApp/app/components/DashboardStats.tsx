import { CalendarIcon, UserGroupIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

export default function DashboardStats({ companies, communications }) {
  const stats = [
    { name: 'Total Companies', stat: companies.length, icon: UserGroupIcon, color: 'from-blue-500 to-blue-600' },
    { name: 'Total Communications', stat: communications.length, icon: ChatBubbleLeftRightIcon, color: 'from-green-500 to-green-600' },
    { name: 'Communications This Month', stat: communications.filter(c => new Date(c.date).getMonth() === new Date().getMonth()).length, icon: CalendarIcon, color: 'from-purple-500 to-purple-600' },
  ]

  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item, index) => (
          <div key={item.name} className={`overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl`}>
            <div className={`px-4 py-5 sm:p-6 bg-gradient-to-r ${item.color}`}>
              <dt className="truncate text-sm font-medium text-white flex items-center">
                <item.icon className="h-6 w-6 mr-2" aria-hidden="true" />
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-white">{item.stat}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
  )
}

