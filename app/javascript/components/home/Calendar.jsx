import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'
import calendarHelper from '../helpers/calendarHelper'
import createSmallCalendar from '../helpers/createSmallCalendar'

let smallCalendarGrid = {}

function Calendar({movies}) {

  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  const [weekdays, setWeekdays] = useState([])

  useEffect(() => {
    if (movies.length === 0) return
    smallCalendarGrid = createSmallCalendar(movies={movies})
    setCurrentMonth(smallCalendarGrid.currentMonth)
    setWeekdays(smallCalendarGrid.weekdays)
    // setCalendarGrid(smallCalendarGrid.calendarGrid)

    // console.log(smallCalendarGrid.calendarGrid)
    // Group week days and attach listener
    for (let i = 0; i < smallCalendarGrid.calendarGrid.length; i+=7) {
      setCalendarGrid(prev => [...prev,
        <button onClick={handleWeekChange} id={"week-"+(i%34/7)} key={i%7+i%34+"week"} className='grid grid-cols-7 w-full'>
          {smallCalendarGrid.calendarGrid.slice(i, i+7)}
        </button>
      ])
    }
  }, [movies])

  const handleWeekChange = (e) => {
    e.preventDefault()
    const weeks = [document.getElementById('week-0'),document.getElementById('week-1'),document.getElementById('week-2'),document.getElementById('week-3'),document.getElementById('week-4')]
    console.log(e.currentTarget.id)
    weeks.map(week => {
      if (week.id === e.currentTarget.id) {
        week.classList.add('bg-gray-100')
      } else {
        week.classList.remove('bg-gray-100')
      }
    })
  }
  return (
    <div className='w-72 m-auto'>
      {/* Calendar month */}
      <div className='text-black font-bold' >
        <p>{currentMonth.charAt(0).toUpperCase()+currentMonth.slice(1)}</p>
      </div>
      <div className='grid grid-cols-7'>
        {weekdays}
      </div>
        {calendarGrid}

    </div>
  )
}

export default Calendar
