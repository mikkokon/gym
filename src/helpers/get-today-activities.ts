import { getYearMonthDayfromThisDate } from "./date-utils"

export function getTodayActivities(times:any, activityType: string) {

  // Suodata valittu aktiviteetti
  const filtteredActs = times.filter((item:any) => {
    return item.type === activityType
  })
  // console.log('valittu aktiviteetin mukaan: ', filtteredActs)

  // Tämä päivä '2020,12,28'
  // const thisDay = getYearMonthDayfromThisDate();


  // Kaikki ajat taulokkoon
  // const timeArr = filtteredActs.map((item:any) => {
  //   return item.date
  // })
  // console.log('ajat: ', timeArr)

  // tämän päivän tulokset
  const timeArrToday = filtteredActs.filter((item:any) => {
    return item.date === getYearMonthDayfromThisDate();
  })
  // console.log('timeArrToday: ', timeArrToday)

  // Etsi lähin päivä
  // const dateToCompare = getYearMonthDayfromThisDate();
  // console.log('dateToCompare: ', dateToCompare)
  // const result = closestTo(new Date(dateToCompare), timeArrNotToday)
  // console.log('result: ', result)

  // Muunna lähin päivä Date -> '2020,12,24'
  // const getString = getStringFromDate(result)
  // console.log('getString: ', getString)

  // Kaikki lähimmän päivän tulokset taulukkoon
  // const all = filtteredActs.filter((item:any) => {
  //   return item.date === getString;
  // })
  // console.log('all: ', all)

  return timeArrToday;
}