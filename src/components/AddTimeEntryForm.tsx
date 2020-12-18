import firebase from 'firebase';
import React, { useState } from 'react';

const AddTimeEntryForm = (props:any) => {
  console.log('props: ', props)
  const [activityType, setActivityType] = useState('');
  const [weigth, setWeigth] = useState(0);
  const [amount, setAmount] = useState(0);

  const onSubmit = (event: any)=> {
    event.preventDefault();

    firebase
    .firestore()
    .collection('practiseDays')
    .add({
      date: new Date(2020, 9, 24),
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
    <>
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

     <div>
      <h4>Activity type</h4>
      <div>
        <button onClick={()=> props.activityType('penkki')} >PENKKI</button>
        <button onClick={()=> props.activityType('kyykky')} >KYYKKY</button>
      </div>   
     </div>
   </>
  )
}

export default AddTimeEntryForm;