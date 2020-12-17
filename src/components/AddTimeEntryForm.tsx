import firebase from 'firebase';
import React, { useState } from 'react';

const AddTimeEntryForm = () => {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  function onSubmit(event: any) {
    event.preventDefault();

    firebase
    .firestore()
    .collection('times')
    .add({
      title,
      time_seconds: parseInt(time)
    })
    .then(() => {
      setTitle('');
      setTime('');
    })
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>Add Time Entry</h4>
      <div>
        <label>Title</label>
        <input 
          type='text'
          value={title}
          onChange={(event)=>setTitle(event.target.value)} />
      </div>
      <div>
        <label>Time</label>
        <input 
          type='number'
          value={time}
          onChange={(event)=>setTime(event.target.value)} />
      </div>
      <button>Add Time Entry</button>  
    </form>
  )
}

export default AddTimeEntryForm;