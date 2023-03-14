
type DateObject = {
  year: string,
  month: string,
  day: string,
  hour: string,
  minutes: string,
}
function projectionStillToCome(projectionTime:DateObject, today:DateObject):boolean {
  if (projectionTime.day > today.day) return true
  if (projectionTime.day === today.day && projectionTime.hour > today.hour) return true
  return false
}

export default projectionStillToCome
