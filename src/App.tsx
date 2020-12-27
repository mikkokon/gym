import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from './firebase';
import TimesList from './components/TimesList';
import AddTimeEntryForm from './components/AddTimeEntryForm';
import PreviousActivities from './components/PreviousActivities';

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
  // yksi tapa jolla haetaan tietty data indexin avulla
  // const index = completedShifts.findIndex(c => c.id === completed.id);
  // const oldCompleted = completedShifts[index];

  const times = useTimes(); 
  
  const [activityType, setActivityType] = useState('');
  const [weigth, setWeigth] = useState(0);
  const [amount, setAmount] = useState(0);
 
  const onSubmit = (event: any)=> {
    event.preventDefault();

    firebase
    .firestore()
    .collection('practiseDays')
    .add({
      date: new Date(2020, 9, 24),  //MUUTA TÄKSI PÄIVÄKSI !!
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
        <AddTimeEntryForm
          setActivityType={(type: any) => setActivityType(type)}
          onActivityTypeEvent = {(event:any)=>setActivityType(event.target.value)}
          activityType={activityType}
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
          <PreviousActivities
            activityType={activityType}
            times={times} /> 
        </div>
         
      </div>  
    </>
  );
}

export default App;
 // FORMI ???  kt.https://www.youtube.com/watch?v=rSgbYCdc4G0 