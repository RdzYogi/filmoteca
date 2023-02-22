
type ResultObject = {
  decemberYearBefore: Date[],
  januaryYearAfter: Date[],
  0: Date[], 1: Date[], 2: Date[], 3: Date[], 4: Date[],5: Date[], 6: Date[], 7: Date[], 8: Date[], 9: Date[], 10: Date[], 11: Date[],
  spanishWeekdays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
}

function calendarHelper() {
  const result : ResultObject= {
    decemberYearBefore:[],
    januaryYearAfter:[],
    0: [], 1: [], 2: [], 3: [], 4: [],5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [],
    spanishWeekdays: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
  }

  const year = new Date().getFullYear()

  // Fill december of last year key
  let dataLastYear = new Date(Date.UTC(year - 1, 11, 1));
  while (dataLastYear.getUTCMonth() === 11) {
    result["decemberYearBefore"].push(new Date(dataLastYear));
    dataLastYear.setUTCDate(dataLastYear.getUTCDate() + 1);
  }

  // Fill january of next year
  let dataNextYear = new Date(Date.UTC(year + 1, 0, 1));
  while (dataNextYear.getUTCMonth() === 0) {
    result["januaryYearAfter"].push(new Date(dataNextYear));
    dataNextYear.setUTCDate(dataNextYear.getUTCDate() + 1);
  }

  for (let month = 0; month < 12; month++) {
    let date = new Date(Date.UTC(year, month, 1));
    while (date.getMonth() === month) {
      result[month].push(new Date(date));
      date.setUTCDate(date.getDate() + 1);
    }
  }
  // console.log("result:",result)
  return result
}

export default calendarHelper
