import { closestTo } from "date-fns"
import { getDate, getDateFromFireBase, getDatefromString, getYearMonthDay, getYearMonthDayfromThisDate } from "./date-utils"

export function getActivities(times:any, activityType: string) {

  // Suodata valittu aktiviteetti
  const r = times.filter((item:any) => {
    return item.type === activityType
  })
  console.log('valittu aktiviteetin mukaan: ', r)

  // Nappaa kaikki ajat
  const ajat = r.map((item:any) => {
    return (getYearMonthDayfromThisDate())
  })
  console.log('ajat: ', ajat)

  // getDate() --> saadaan kuukauden päivä 1 - 31 !!!

  // Etsi lähin päivä
  const dateToCompare = getDatefromString('2020,12,27');
  console.log('dateToCompare: ', dateToCompare)
  // const result = closestTo(dateToCompare, ajat)
  // console.log('results: ', result)

  // Lähin päivä year, month, day
  // const resu = getYearMonthDay(result);
  // console.log('lähin päivä ', resu )

  // Muunna firebase aika Date -objektiksi
  // const res = r.map((item:any) => {
  //   return {...item,  date: getDateFromFireBase(item.date)}  
  // })
  // console.log('res', res)

  // Muunna aika: {year, month, day}
  // const ress = res.map((item:any) => {
  //   return {...item,  date: getYearMonthDay(item.date)}  
  // })
  // console.log('ress', ress)

  // Suodata kaikki lähimmän päivän aktiviteetit
  // const tulos = ress.filter((item:any) => {
  //   return resu.year === item.date.year  &&
  //         resu.month === item.date.month &&
  //         resu.day === item.date.day
  // })
  // return tulos
  // // Suodata valittu aktiviteetti
  // const r = times.filter((item:any) => {
  //   return item.type === activityType
  // })
  // console.log('valittu aktiviteetin mukaan: ', r)

  // // Nappaa kaikki ajat ja muunna date -objekteiksi
  // const ajat = r.map((item:any) => {
  //   return getDateFromFireBase(item.date)
  // })
  // console.log('ajat: ', ajat)

  // // Etsi lähin päivä
  // const dateToCompare = new Date();
  // const result = closestTo(dateToCompare, ajat)
  // console.log('results: ', result)

  // // Lähin päivä year, month, day
  // const resu = getYearMonthDay(result);
  // console.log('lähin päivä ', resu )

  // // Muunna firebase aika Date -objektiksi
  // const res = r.map((item:any) => {
  //   return {...item,  date: getDateFromFireBase(item.date)}  
  // })
  // console.log('res', res)

  // // Muunna aika: {year, month, day}
  // const ress = res.map((item:any) => {
  //   return {...item,  date: getYearMonthDay(item.date)}  
  // })
  // console.log('ress', ress)

  // // Suodata kaikki lähimmän päivän aktiviteetit
  // const tulos = ress.filter((item:any) => {
  //   return resu.year === item.date.year  &&
  //         resu.month === item.date.month &&
  //         resu.day === item.date.day
  // })
  // return tulos
}