import React, { useState } from 'react';
import './App.css';
import Input from './UI/Input/Input';
import firebase from './firebase';
import TimesList from './components/TimesList';
import AddTimeEntryForm from './components/AddTimeEntryForm';


// firebase.firestore().collection('times').add({
//   title: 'Rubik\'s Cube',
//   time_seconds: 100
// })

function App() {
  // yksi tapa jolla haetaan tietty data indexin avulla
  // const index = completedShifts.findIndex(c => c.id === completed.id);
  // const oldCompleted = completedShifts[index];

  // tai käytä firestoren omia query -tapoja suoraan tietokannasta !!

  // interface Data {
  //   date: {} | undefined
  //   type: string | undefined
  //   weigth: number | undefined
  //   amount: number | undefined
  // }

  // const [formData, setFormData] = useState<Data[]>([]);
  // const [type, setType] = useState('')
  // const [weigth, setWeigth] = useState(0);
  // const [amount, setAmount] = useState(0)

  // const save = () => {
  //     console.log('formData: ', formData)
  //     setFormData(prevItems => 
  //       [...prevItems, 
  //         { date: new Date(),
  //           type: type,
  //           weigth: weigth,
  //           amount: amount }
  //       ]);
  // }

  return (
    <>
    <div className='App'>
      <h1>GYM</h1>
      <TimesList/>
      <AddTimeEntryForm/>
    </div>



     {/* MUUTA tietueeksi siten, että päivä + datat eikä joka datassa päivä mukana */}
    {/* FORMI ???  kt.https://www.youtube.com/watch?v=rSgbYCdc4G0 */}
      {/* <button onClick={() => setType('kyykky')} >KYYKKY</button>
      <button onClick={() => setType('penkki')} >PENKKI</button>
      <Input 
        type='number'
        onChangeValue={(event) => setWeigth(parseInt(event.target.value))}
        value={weigth}
      />
      <Input 
        type='number'
        onChangeValue={(event) => setAmount(parseInt(event.target.value))}
        value={amount}
      />
      <button onClick = {() => save()}>SAVE</button>

      <div>{formData.map((item, index) => {
        return (
          <>
            <div key={index} style={{display:'flex'}}>
              <div>{item.type}</div>
              <div>{item.weigth}kg</div>
              <div>{item.amount}kertaa</div>
            </div>         
          </>
        )
      })}
      </div>      */}
    </>
  );
}

export default App;
