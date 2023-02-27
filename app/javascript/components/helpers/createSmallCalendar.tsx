import React, { ReactElement, useEffect, useState } from 'react'
import getDateObject from './getDateObject'
import calendarHelper from './calendarHelper'


type Props = {
  movies: Array<ReactElement>
}
type Result = {
  currentMonth: string,
  weekdays: Array<Element>,
  calendarGrid: Array<Element>,
}

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

// This function creates the calendar grid for the small calendar
// Filling the days of the previous month, the current month and the next month
// It also fills the days with the projections of the movies
// It receives an array of rendered movie cards
// It returns an object with the current month, the weekdays and the calendar grid

// The calendar grid is an array of JSX elements
// That can be iterated in the small calendar component
// To attach listeners to each day or week

function createSmallCalendar( {movies} : Props) {
  // console.log("smallCalendar",typeof movies,movies)
  if (movies.length === 0) return
  const result = {
    currentMonth: '',
    weekdays: [] as JSX.Element[],
    calendarGrid: [] as JSX.Element[],
  }

  if (movies.length === 0) return

  const calendarHelperInfo = calendarHelper()
  // console.log(calendarHelperInfo)

  // Get current month
  const dateToday = new Date()
  // Get the month name in spanish
  result.currentMonth = getDateObject(dateToday.toDateString(),{monthLong:true}).month
  // Get the month index
  const monthIndex = dateToday.getMonth()

  // Set the days of the week
  calendarHelperInfo.spanishWeekdays.map((day, index) => {
    result.weekdays.push(<div key={index} className="flex flex-col items-center pb-2 font-bold">{day.charAt(0)}</div>)
  })

  // Fill the calendar grid with the days of the previous month
  const firstDayOfMonth = getDateObject(calendarHelperInfo[monthIndex][0],{dayLong:true}).day
  const daysOfPreviousMonth = firstDayOfMonthHelper[firstDayOfMonth]
  if(monthIndex > 0) {
    for (let i = 0; i < daysOfPreviousMonth; i++) {
      result.calendarGrid.push(<div className='text-gray-300 flex flex-col items-center' key={i+"prevMonth"}>{calendarHelperInfo[monthIndex-1].length-daysOfPreviousMonth+i+1}</div>)
    }
  } else {
    for (let i = 0; i < daysOfPreviousMonth; i++) {
      result.calendarGrid.push(<div className='text-gray-300 flex flex-col items-center' key={i+"prevMonth"}>{calendarHelperInfo.decemberYearBefore.length-daysOfPreviousMonth+i+1}</div>)
    }
  }

  // Fill the calendar grid with the days of the current month
  const daysOfCurrentMonth = calendarHelperInfo[monthIndex].length
  for (let i = 0; i < daysOfCurrentMonth; i++) {
    const currentDayMovies = [] as JSX.Element[]
    // Prepare the projections for the day we are iterating
    movies.forEach((movie) => {
      const projections = movie.props.movie.include.projections
      projections.map((projection,index) => {
        const day = getDateObject(projection.include.session.play_time).day
        if (Number(day)-1 === i){
          currentDayMovies.push(<div key={index*100+projection.projection.id} className={"h-1 w-1 rounded-full bg-"+movie.props.movie.include.cycle.color}></div>)
        }
      })
    })
    result.calendarGrid.push(
      <div key={i+"currMonth"} className="flex flex-col items-center h-10">
        <div>{i+1}</div>
        <div className='flex'>
          {currentDayMovies}
        </div>
      </div>
    )
  }

    // Fill the calendar grid with the days of the next month
    const lastDayOfMonth = getDateObject(calendarHelperInfo[monthIndex].slice(-1),{dayLong:true}).day
    const daysOfNextMonth = lastDayOfMonthHelper[lastDayOfMonth]
    for (let i = 0; i < daysOfNextMonth; i++) {
      result.calendarGrid.push(<div className='text-gray-300 flex flex-col items-center' key={i+"nextMonth"}>{i+1}</div>)
    }

  return result
}

export default createSmallCalendar
