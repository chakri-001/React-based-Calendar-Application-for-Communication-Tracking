import Link from 'next/link'
import { CalendarDaysIcon, BuildingOffice2Icon, ChartBarIcon } from '@heroicons/react/24/outline'

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-6">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600 flex items-center">
              <ChartBarIcon className="h-8 w-8 mr-2" />
              Communication Tracker
            </Link>
          </div>
          <div className="ml-10 space-x-8 hidden md:flex">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center">
              <ChartBarIcon className="h-5 w-5 mr-1" />
              Dashboard
            </Link>
            <Link href="/calendar" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center">
              <CalendarDaysIcon className="h-5 w-5 mr-1" />
              Calendar
            </Link>
            <Link href="/companies" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center">
              <BuildingOffice2Icon className="h-5 w-5 mr-1" />
              Companies
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

