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

function getDateObject(date: Date,
                       {dayLong = false,
                       monthLong = false}: {dayLong?: boolean, monthLong?: boolean} = {}) {


  const optionMonth: Intl.DateTimeFormatOptions = monthLong ? { month: "long" } : { month: "2-digit" };
  const optionYear: Intl.DateTimeFormatOptions = { year: "numeric" };
  const optionDay: Intl.DateTimeFormatOptions = dayLong ? {weekday:"long"} : { day: "numeric" };
  const optionHour: Intl.DateTimeFormatOptions = { hour: "2-digit" };
  const optionMinutes: Intl.DateTimeFormatOptions = { minute: "2-digit" };

  const dateObject: DateObject = {
    year: "",
    month: "",
    day: "",
    hour: "",
    minutes: "",
  } as DateObject
  dateObject.month = new Intl.DateTimeFormat('es-ES',optionMonth).format(date)
  dateObject.year = new Intl.DateTimeFormat('es-ES',optionYear).format(date)
  dateObject.day = new Intl.DateTimeFormat('es-ES',optionDay).format(date)
  dateObject.hour = new Intl.DateTimeFormat('es-ES',optionHour).format(date)
  dateObject.minutes = new Intl.DateTimeFormat('es-ES',optionMinutes).format(date)
  if (dateObject.minutes === "0"){
    dateObject.minutes = "00"
  }

  return dateObject
}

export default getDateObject
