import { closestTo } from "date-fns"
import { getStringFromDate, getYearMonthDayfromThisDate } from "./date-utils"

export function getActivities(times:any, activityType: string) {

  // Suodata valittu aktiviteetti
  const filtteredActs = times.filter((item:any) => {
    return item.type === activityType
  })
  //console.log('valittu aktiviteetin mukaan: ', filtteredActs)

  // Kaikki ajat taulokkoon
  const timeArr = filtteredActs.map((item:any) => {
    return item.date
  })
  //console.log('ajat: ', timeArr)

  // Poista tämän päivän tulokset ja muuta kaikki Date -objektiksi
  const timeArrNotToday = timeArr.filter((item:any) => {
    return item !== getYearMonthDayfromThisDate();
  }).map((item:any) => new Date(item))
  //console.log('timeArrNotToday: ', timeArrNotToday)

  // Etsi lähin päivä
  const dateToCompare = getYearMonthDayfromThisDate();
  //console.log('dateToCompare: ', dateToCompare)
  const result = closestTo(new Date(dateToCompare), timeArrNotToday)
  //console.log('result: ', result)

  // Muunna lähin päivä Date -> '2020,12,24'
  const getString = getStringFromDate(result)
  //console.log('getString: ', getString)

  // Kaikki lähimmän päivän tulokset taulukkoon
  const all = filtteredActs.filter((item:any) => {
    return item.date === getString;
  })
  //console.log('all: ', all)

  return all;
}