import { closestTo } from "date-fns"
import { getStringFromDate, getYearMonthDayfromThisDate } from "./date-utils"

export function getActivities(times:any, activityType: string) {

  // Suodata valittu aktiviteetti
  const filtteredActs = times.filter((item:any) => {
    return item.type === activityType
  })
  
  // Kaikki ajat taulokkoon
  const timeArr = filtteredActs.map((item:any) => {
    return item.date
  })

  // Poista tämän päivän tulokset ja muuta kaikki Date -objektiksi
  const timeArrNotToday = timeArr.filter((item:any) => {
    return item !== getYearMonthDayfromThisDate();
  }).map((item:any) => new Date(item))

  // Etsi lähin päivä
  const dateToCompare = getYearMonthDayfromThisDate();
  const result = closestTo(new Date(dateToCompare), timeArrNotToday)

  // Muunna lähin päivä Date -> '2020,12,24'
  const getString = getStringFromDate(result)

  // Kaikki lähimmän päivän tulokset taulukkoon
  return filtteredActs.filter((item:any) => {
    return item.date === getString;
  })
}