import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import TimesList from './components/TimesList';
import AddTimeEntryForm from './components/AddTimeEntryForm';
import PreviousActivities from './components/PreviousActivities';
import { getActivities } from './helpers/get-activities';
import { getYearMonthDay, getYearMonthDayfromThisDate } from './helpers/date-utils';
import { getTodayActivities } from './helpers/get-today-activities';

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

function App() {
 
  const times = useTimes();
  
  const [activityType, setActivityType] = useState('');
  const [weigth, setWeigth] = useState(0);
  const [amount, setAmount] = useState(0);
 
  const previousActivities = getActivities(times, activityType)
  const todayActivities = getTodayActivities(times, activityType) 

  const onSubmit = (event: any)=> {
    event.preventDefault();

    firebase
    .firestore()
    .collection('practiseDays')
    .add({
      date: getYearMonthDayfromThisDate(), // '2020,12,28'
      type: activityType,
      weigth: weigth,
      amount: amount
    })
    .then(() => {
      // setWeigth(0);
      // setAmount(0);
    })
  }

  return (
    <>
      <div className='App'>
        <h1>GYM</h1>
        <button onClick={()=> setActivityType('penkki')} >PENKKI</button>
        <button onClick={()=> setActivityType('kyykky')} >KYYKKY</button>
        <AddTimeEntryForm
          onWeigthEvent={(event:any)=>setWeigth(parseInt(event.target.value))}
          weigth={weigth}
          onAmountEvent={(event:any)=>setAmount(parseInt(event.target.value))} 
          amount={amount}
          onSubmit={onSubmit} />
        <div style={{display:'flex'}}>
          {/* Voisko olla yksi komponentti, jossa parametrina mikä päivä .. */}
          <TimesList
            activityType={activityType}
            times={todayActivities} /> 
          <PreviousActivities
            activityType={activityType}
            times={previousActivities} /> 
        </div>
      </div>  
    </>
  );
}

export default App;
 // FORMI ???  kt.https://www.youtube.com/watch?v=rSgbYCdc4G0 