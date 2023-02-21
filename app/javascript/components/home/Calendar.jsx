import React from 'react'
import getDaysOfMonth from '../helpers/getDaysOfMonth'

function Calendar() {
  console.log("Calendar", getDaysOfMonth())
  return (
    <div>Calendar</div>
  )
}

export default Calendar
