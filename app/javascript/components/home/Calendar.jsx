import React, { useEffect } from 'react'
import getDateObject from '../helpers/getDateObject'
import getDaysOfMonth from '../helpers/getDaysOfMonths'

function Calendar() {
  // console.log("Calendar", getDaysOfMonth())
  useEffect(() => {
    const dateInfo = getDaysOfMonth()

    // Extract the month
    const dateToday = new Date()
    const dateTodayDateObject = getDateObject(dateToday,{monthLong:true})
    const monthIndex = dateToday.getMonth()
  }, [])
  return (
    <div>Calendar</div>
  )
}

export default Calendar
