import React, { useEffect } from 'react'
import getDaysOfMonth from '../helpers/getDaysOfMonths'

function Calendar() {
  // console.log("Calendar", getDaysOfMonth())
  useEffect(() => {
    getDaysOfMonth()
  }, [])
  return (
    <div>Calendar</div>
  )
}

export default Calendar
