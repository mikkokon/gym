import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import AddTimeEntryForm from './components/AddTimeEntryForm';
import PreviousActivities from './components/PreviousActivities/PreviousActivities';
import { getActivities } from './helpers/get-activities';
import { getYearMonthDayfromThisDate } from './helpers/date-utils';
import { getTodayActivities } from './helpers/get-today-activities';
import NumberPad from './components/NumberPad/NumberPad';
import TodayActivities from './components/TodayActivities/TodayActivities';

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
  const [isActivitiesOpen, setActivitiesOpen] = useState(true); 

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
        {/* <NumberPad/> */}
        <p>sorttaa painon mukaan</p>
        { isActivitiesOpen &&
          <div className='activities'>   
            <PreviousActivities
              activityType={activityType}
              times={previousActivities} />
            <TodayActivities
              activityType={activityType}
              times={todayActivities} />  
          </div>
        }

        <AddTimeEntryForm
          onWeigthEvent={(event:any)=>setWeigth(parseInt(event.target.value))}
          weigth={weigth}
          onAmountEvent={(event:any)=>setAmount(parseInt(event.target.value))} 
          amount={amount}
          onSubmit={onSubmit} />

        <div onClick={() => setActivitiesOpen(!isActivitiesOpen)}>SPORT</div>
        <div>KG</div>
        <div>REPS</div>
        <button onClick={()=> setActivityType('penkki')} >PENKKI</button>
        <button onClick={()=> setActivityType('kyykky')} >KYYKKY</button>
      </div>  
    </>
  );
}

export default App;
 // FORMI ???  kt.https://www.youtube.com/watch?v=rSgbYCdc4G0 