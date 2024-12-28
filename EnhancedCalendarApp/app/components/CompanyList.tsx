'use client'

import { useState } from 'react'
import { format, addDays } from 'date-fns'
import { BuildingOffice2Icon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

export default function CompanyList({ companies }) {
  const [selectedCompany, setSelectedCompany] = useState(null)

  const handleCommunication = async (companyId) => {
    const response = await fetch('/api/communications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ companyId, date: new Date().toISOString() })
    })

    if (response.ok) {
      // Refresh the page to show updated data
      window.location.reload()
    }
  }

  return (
    <div className="overflow-hidden bg-white shadow-lg sm:rounded-lg">
      <ul role="list" className="divide-y divide-gray-200">
        {companies.map((company) => (
          <li key={company.id} className="transition-colors duration-150 ease-in-out hover:bg-gray-50">
            <div className="block">
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-indigo-600">{company.name}</p>
                  <div className="ml-2 flex flex-shrink-0">
                    <button
                      onClick={() => handleCommunication(company.id)}
                      className="inline-flex items-center rounded-full border border-transparent bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-700 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-150 ease-in-out"
                    >
                      Log Communication
                    </button>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="flex items-center text-sm text-gray-500">
                      <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {company.email}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                      <PhoneIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      {company.phone}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      Last Communication: {company.lastCommunication ? format(new Date(company.lastCommunication), 'PP') : 'Never'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

