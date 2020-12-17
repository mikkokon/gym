import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

function useTimes(){
  const [times, setTimes] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
    .firestore()
    .collection('practiseDays')
    .onSnapshot((snapshot) => {
      const newTimes:any = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      }) 
      setTimes(newTimes)
    })
    return () => unsubscribe();    
  }, []) 
  return times
}

const TimesList = () => {
  const times = useTimes();

  useEffect(() => {
    console.log('times in useEffect: ', times)
    const r = times.filter((item:any) => {
      return item.type === 'penkki'
    })
    console.log('r: ', r)
    const m = r.map((item:any) => {
      return item.date;
    })
    console.log('m: ', m)
    // Muunna nanosekunneiksi ja etsi suurin arvo -> muunna päivämääräksi
  })

  const getDate = (time: any) => {
    const monthNames = ["January", "February", 
                        "March", "April", "May", "June",
                        "July", "August", "September",
                        "October", "November", "December"
    ];
    const nanosecs = time.nanoseconds + time.seconds * 1000;
    const date = new Date(nanosecs);  
    const month = date.getMonth();  
    return monthNames[month];
  }

  return (
    <div>
      <ol>
        {times.map((time: any) => 
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