import React from 'react'
import getDaysOfMonth from '../helpers/getDaysOfMonths'

function Calendar() {
  // console.log("Calendar", getDaysOfMonth())
  getDaysOfMonth()
  return (
    <div>Calendar</div>
  )
}

export default Calendar
