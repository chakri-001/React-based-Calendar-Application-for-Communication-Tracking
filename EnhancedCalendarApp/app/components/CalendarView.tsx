'use client'

import { useState } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

moment.locale('en-GB')
const localizer = momentLocalizer(moment)

export default function CalendarView({ companies, communications }) {
  const [selectedEvent, setSelectedEvent] = useState(null)

  const events = communications.map(comm => ({
    id: comm.id,
    title: `${companies.find(c => c.id === comm.companyId).name} - ${comm.method}`,
    start: new Date(comm.date),
    end: new Date(comm.date),
    resource: comm
  }))

  const handleSelectEvent = (event) => {
    setSelectedEvent(event.resource)
  }

  return (
    <div className="space-y-4">
      <div className="bg-white p-4 rounded-lg shadow-lg" style={{ height: '600px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={handleSelectEvent}
          style={{ height: '100%' }}
        />
      </div>
      {selectedEvent && (
        <div className="bg-white shadow-lg sm:rounded-lg overflow-hidden transition-all duration-300 ease-in-out transform hover:shadow-xl">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Communication Details
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Company: {companies.find(c => c.id === selectedEvent.companyId).name}</p>
              <p>Date: {moment(selectedEvent.date).format('MMMM D, YYYY')}</p>
              <p>Method: {selectedEvent.method}</p>
              <p>Notes: {selectedEvent.notes}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

