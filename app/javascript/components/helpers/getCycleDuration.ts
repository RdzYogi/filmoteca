type DateObject = {
  year: string,
  month: string,
  day: string,
  hour: string,
  minutes: string,
}

//  This function returns a string with the duration of a cycle
//  It takes two DateObjects as arguments and returns a string
function getCycleDuration(startDate: DateObject, endDate: DateObject) {
  let result = ""
  if (startDate.month === endDate.month && startDate.year === endDate.year) {
    result = startDate.month + " " + startDate.year
  } else if (startDate.year === endDate.year) {
    result = startDate.month + " - " + endDate.month + " " + endDate.year
  } else {
    result = startDate.month + " " + startDate.year + " - " + endDate.month + " " + endDate.year
  }
  return result
}

export default getCycleDuration
