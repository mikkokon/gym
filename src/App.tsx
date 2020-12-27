import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import TimesList from './components/TimesList';
import AddTimeEntryForm from './components/AddTimeEntryForm';
import PreviousActivities from './components/PreviousActivities';
import { getActivities } from './helpers/get-activities';
import { getYearMonthDay, getYearMonthDayfromThisDate } from './helpers/date-utils';

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
 
  // Get previous activities
  const tulos = getActivities(times, activityType)
  console.log('tulos: ', tulos) 
  console.log('tämä päivä: ', new Date())

  const onSubmit = (event: any)=> {
    event.preventDefault();

    firebase
    .firestore()
    .collection('practiseDays')
    .add({
      // date: {year: 2020, month: 12, day: 27},
      // date: getYearMonthDayfromThisDate(),
      date: '2020,12,27',
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
            times={times} /> 
          {/* <PreviousActivities
            activityType={activityType}
            times={tulos} />  */}
        </div>
      </div>  
    </>
  );
}

export default App;
 // FORMI ???  kt.https://www.youtube.com/watch?v=rSgbYCdc4G0 