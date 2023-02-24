import React, { useEffect, useState } from 'react'
import getDateObject from '../helpers/getDateObject'
import calendarHelper from '../helpers/calendarHelper'

const firstDayOfMonthHelper = {
  'lunes': 0,
  'martes': 1,
  'miércoles': 2,
  'jueves': 3,
  'viernes': 4,
  'sábado': 5,
  'domingo': 6,
}
const lastDayOfMonthHelper = {
  'lunes': 6,
  'martes': 5,
  'miércoles': 4,
  'jueves': 3,
  'viernes': 2,
  'sábado': 1,
  'domingo': 0,
}

function Calendar({movies}) {
  const [movieCards, setMovieCards] = useState({})

  const [currentMonth, setCurrentMonth] = useState('')
  const [calendarGrid, setCalendarGrid] = useState([])
  useEffect(() => {
    if (movies.length === 0) return
    movies.map((movie, index) => {
      // const day = getDateObject(movie.props.movie.include.session.play_time)
      // console.log(day)
      setMovieCards(prevState => ({...prevState, [index]: <div key={index+"movie"}></div>}))
    })
    const calendarHelperInfo = calendarHelper()
    // console.log(calendarHelperInfo)

    // Get current month
    const dateToday = new Date()
    // Get the month name in spanish
    setCurrentMonth(getDateObject(dateToday,{monthLong:true}).month)
    // Get the month index
    const monthIndex = dateToday.getMonth()

    // Set the days of the week
    calendarHelperInfo.spanishWeekdays.map((day, index) => {
      setCalendarGrid(prevState => [...prevState, <div key={index}>{day.charAt(0)}</div>])
    })

    // Fill the calendar grid with the days of the previous month
    const firstDayOfMonth = getDateObject(calendarHelperInfo[monthIndex][0],{dayLong:true}).day
    const daysOfPreviousMonth = firstDayOfMonthHelper[firstDayOfMonth]
    if(monthIndex > 0) {
      for (let i = 0; i < daysOfPreviousMonth; i++) {
        setCalendarGrid(prevState => [...prevState, <div className='text-gray-300' key={i+"prevMonth"}>{calendarHelperInfo[monthIndex-1].length-daysOfPreviousMonth+i+1}</div>])
      }
    } else {
      for (let i = 0; i < daysOfPreviousMonth; i++) {
        setCalendarGrid(prevState => [...prevState, <div className='text-gray-300' key={i+"prevMonth"}>{calendarHelperInfo.decemberYearBefore.length-daysOfPreviousMonth+i+1}</div>])
      }
    }

    // Fill the calendar grid with the days of the current month
    const daysOfCurrentMonth = calendarHelperInfo[monthIndex].length
    for (let i = 0; i < daysOfCurrentMonth; i++) {
      setCalendarGrid(prevState => [...prevState,
        <div key={i+"currMonth"}>
          <div>{i+1}</div>
        </div>
      ])
    }

    // Fill the calendar grid with the days of the next month
    const lastDayOfMonth = getDateObject(calendarHelperInfo[monthIndex].slice(-1),{dayLong:true}).day
    const daysOfNextMonth = lastDayOfMonthHelper[lastDayOfMonth]
    for (let i = 0; i < daysOfNextMonth; i++) {
      setCalendarGrid(prevState => [...prevState, <div className='text-gray-300' key={i+"nextMonth"}>{i+1}</div>])
    }


  }, [movies])
  return (
    <div className='max-w-2xl m-auto'>
      {/* Calendar month */}
      <div className='text-black' >
        <p>{currentMonth}</p>
      </div>
      <div className='grid grid-cols-7'>
        {calendarGrid}
      </div>

    </div>
  )
}

export default Calendar
