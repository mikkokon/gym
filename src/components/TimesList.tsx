import React, { useEffect, useState } from 'react';
import firebase from '../firebase';

const useTimes = () => {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    firebase
    .firestore()
    .collection('times')
    .onSnapshot((snapshot) => {
      const newTimes:any = snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() }
      })

      setTimes(newTimes)
    })
  }, [])
  return times
}

const TimesList = () => {
  const times = useTimes();

  return (
    <div>
      <h2>Times List</h2>
      <div>
        <label>Sort By:</label>{' '}
        <select>
          <option>Time (fastest first)</option>
          <option>Time (slowest first)</option>
          <option disabled>---</option>
          <option>Title (a-z)</option>
          <option>Title (z-a)</option>
        </select>
      </div>
      <ol>
        {times.map((time: any) => 
          <li key={time.id}>
            <div className="time-entry">
              {time.title}
              <code className='time'>{time.time_seconds}</code>
            </div>
          </li>
        )}
      
    </ol>
    </div>
    
  )
}

export default TimesList;