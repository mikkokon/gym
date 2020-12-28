import { getYearMonthDayfromThisDate } from "./date-utils"

export function getTodayActivities(times:any, activityType: string) {

  // Suodata valittu aktiviteetti
  const filtteredActs = times.filter((item:any) => {
    return item.type === activityType
  })

  // tämän päivän tulokset
  return filtteredActs.filter((item:any) => {
    return item.date === getYearMonthDayfromThisDate();
  })
}