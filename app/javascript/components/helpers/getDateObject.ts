type DateObject = {
  year: string,
  month: string,
  day: string,
  hour: string,
  minutes: string,
}

// Calling getDateObject(Date) returns a DateObject
// with the day as a number, and the month as a number

// The second argument is an OBJECT with two optional properties:
// dayLong: boolean that returns the day as a string if set to true
// monthLong: boolean that returns the month as a string if set to true

function getDateObject(dateString: string,
                       {dayLong = false,
                       monthLong = false}: {dayLong?: boolean, monthLong?: boolean} = {}) {

  const date = new Date(dateString)

  const optionMonth = monthLong ? "long":"2-digit" ;
  const dateObject: DateObject = {
    year: "",
    month: "",
    day: "",
    hour: "",
    minutes: "",
  } as DateObject

  if (dayLong) {
    const intlDate = new Intl.DateTimeFormat('es-ES',{year: "numeric",month: optionMonth, weekday: "long",day:"numeric",hour:"2-digit",minute: "2-digit"}).format(date)
    dateObject.month = monthLong ? intlDate.split(" ")[2] : intlDate.split("/")[1]
    dateObject.year = monthLong ? intlDate.split(",")[1].split(" ")[4] : intlDate.split(",")[1].split("/")[1]
    dateObject.day = intlDate.split(',')[0]
    dateObject.hour = intlDate.split(',')[1].split(' ')[1].split(':')[0]
    dateObject.minutes = intlDate.split(',')[2].split(' ')[1].split(':')[1]
    if (dateObject.minutes === "0"){
      dateObject.minutes = "00"
    }
  } else{
    const intlDate = new Intl.DateTimeFormat('es-ES',{year: "numeric",month: optionMonth, day: "2-digit",hour:"2-digit",minute: "2-digit"}).format(date)
    dateObject.month = monthLong ? intlDate.split(" ")[2] : intlDate.split("/")[1]
    dateObject.year = monthLong ? intlDate.split(" ")[4] : intlDate.split("/")[2].split(",")[0]
    dateObject.day = monthLong ? intlDate.split(" ")[0] : intlDate.split("/")[0]
    dateObject.hour = intlDate.split(',')[1].split(' ')[1].split(':')[0]
    dateObject.minutes = intlDate.split(',')[1].split(' ')[1].split(':')[1]
    if (dateObject.minutes === "0"){
      dateObject.minutes = "00"
    }
  }
  return dateObject
}

export default getDateObject
