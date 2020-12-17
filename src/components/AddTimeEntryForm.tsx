import firebase from 'firebase';
import React, { useState } from 'react';

const AddTimeEntryForm = () => {
  // const [title, setTitle] = useState('');
  // const [time, setTime] = useState('');
  const [activityType, setActivityType] = useState('');
  const [weigth, setWeigth] = useState(0);
  const [amount, setAmount] = useState(0);

  function onSubmit(event: any) {
    event.preventDefault();

    firebase
    .firestore()
    .collection('practiseDays')
    .add({
      date: new Date(),
      type: activityType,
      weigth: weigth,
      amount: amount
    })
    .then(() => {
      setActivityType('');
      setWeigth(0);
      setAmount(0);
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Entry</h4>
      <div>
        <label>Activity type</label>
        <input 
          type='text'
          value={activityType}
          onChange={(event)=>setActivityType(event.target.value)} />
      </div>
      <div>
        <label>Weigth</label>
        <input 
          type='number'
          value={weigth}
          onChange={(event)=>setWeigth(parseInt(event.target.value))} />
      </div>
      <div>
        <label>Amount</label>
        <input 
          type='number'
          value={amount}
          onChange={(event)=>setAmount(parseInt(event.target.value))} />
      </div>
      <button>Add Time Entry</button>  
    </form>
  )
}

export default AddTimeEntryForm;