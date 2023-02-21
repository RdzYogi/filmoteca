
function getDaysOfMonths() {
  const result= {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
  }
  const year = new Date().getFullYear()
  for (let month = 0; month < 12; month++) {
    let date = new Date(Date.UTC(year, month, 1));
    while (date.getMonth() === month) {
      // Object.defineProperty(result, month, {
      // });
      result[month].push(new Date(date));
      date.setUTCDate(date.getDate() + 1);
    }
  }
  console.log("result:",result)
  return ""
}

export default getDaysOfMonths
