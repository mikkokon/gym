import React, { useEffect } from 'react';
import closestTo from 'date-fns/closestTo'

interface ITimeListProps {
  times: ITimes[]
  activityType: string
}

interface ITimes {
  amount: number
  date: Date
  id: string
  type: string
  weigth: number
}

const TimesList = (props: ITimeListProps) => {
  console.log('props: ', props)

  // Näytetään ed. päivän valitut tulokset valitun lajin mukaan
  useEffect(() => {
    // Suodata valittu aktiviteetti
    // console.log('times: ', times)
    // const r = times.filter((item:any) => {
    //   return item.type === props.activityType
    // })
    // console.log('valittu aktiviteetin mukaan: ', r)
    
    //  // Taulukoi valittu aktiviteetti ja päivä
    // const m = r.map((item:any) => {
    //   return {date: getNanoSeconds(item.date), 
    //           type: item.type,
    //           weigth: item.weigth,
    //           amount: item.amount };
    // })
    // console.log('m: ', m)
    // getResultsByDay(m)

    // Haetaan edellinen (toisiksi suurimmat) ajat


    // Taulukoi valitut aktiviteetit edelliseltä kerralta
    

    // setPrevious(m)
    // Muunna nanosekunneiksi ja etsi suurin arvo -> muunna päivämääräksi
  })

  // Näytetään tämän päivän tulokset valitun lajin mukaan
  useEffect(() => {
    // const r = times.filter((item:any) => {
    //   return item.type === props.activityType
    // })
    // console.log('r: ', r)
    // const m = r.map((item:any) => {
    //   return item.date;
    // })
    // console.log('m: ', m)
    // Muunna nanosekunneiksi ja etsi suurin arvo -> muunna päivämääräksi
  })

  // Palauttaa nanosekunnit (date: t {seconds: 1603486800, nanoseconds: 0})
  const getNanoSeconds = (time:any) => {
    return time.nanoseconds + time.seconds * 1000;
  }
  
  // Palauttaa tulokset päivän mukaan; argumentti on lajiteltu jo tyypin mukaan
  const getResultsByDay = (res: any) => {
    console.log('res: ', res)
    const origArr = [
      {date:52434, type:'penkki', weigth: 10, amount: 30},
      {date:32004, type:'penkki', weigth: 200, amount: 10},
      {date:52100, type:'penkki', weigth: 30, amount: 20},
    ]

    var dateToCompare = new Date(2015, 8, 6)
    var result = closestTo(dateToCompare, [
      new Date(2000, 0, 1, 4),
      new Date(2030, 0, 1, 3),
      new Date(2030, 0, 1, 2)
    ])
   console.log('results: ', result)
    // 1. Etsi lähin päivä
    // 2. Filtteroi (vuosi, kk, päivä -argumenteilla) kaikki lähimmät päivät
    // 3. Siinä se !

    // Huonompi vaihtoehto:
    // 1. Muunna pvm muotoon : vuosi, kk, pv
    // 2. Jos sama vuosi, kk ja pv (filter dublicates) -> tee taulukko, jossa kaikki ko pvm aktiviteetit
    // 3. Laita parent -taulukkoon 
    // Päälooppi ja erillisessä funktiossa tehdään kohdan 2 asiat

    // arr =  [
            //     date1 : [
            //       {weigth: 10, amount: 30},
            //       {weigth: 30, amount: 20},
            //     ],
            //     date2 : [
            //       {weigth: 200, amount: 10},
            //     ]
            // ]
  }


  // Palauttaa aikaa vastaavan kuukauden nimen
  const getDate = (time: any) => {
    const monthNames = ["January", "February", 
                        "March", "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
    ];
    const nanosecs = getNanoSeconds(time);
    const date = new Date(nanosecs);  
    const month = date.getMonth();  
    return monthNames[month];
  }

  return (
    <div>
      <ol>
        {props.times.map((time: any) => 
          <li key={time.id}>
            <div className="time-entry">{getDate(time.date)}</div>
            <div className='time'>{time.type}</div>    
          </li>
        )}   
    </ol>
    </div>  
  )
}

export default TimesList;