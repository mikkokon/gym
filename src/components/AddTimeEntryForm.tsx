import React from 'react';

interface IAddTimeEntryProps {
  setActivityType: any
  onActivityTypeEvent: any
  activityType: string
  onWeigthEvent: any
  weigth: number
  onAmountEvent: any
  amount: number
  onSubmit: any 
}

const AddTimeEntryForm = (props:IAddTimeEntryProps) => {
 
  return (
    <>
    <form onSubmit={props.onSubmit}>
      <div>
        <button onClick={()=> props.setActivityType('penkki')} >PENKKI</button>
        <button onClick={()=> props.setActivityType('kyykky')} >KYYKKY</button>
      </div>   
      <div>
        <label>Weigth</label>
        <input 
          type='number'
          value={props.weigth}
          onChange={props.onWeigthEvent} />
      </div>
      <div>
        <label>Amount</label>
        <input 
          type='number'
          value={props.amount}
          onChange={props.onAmountEvent} />
      </div>
      <button>Add</button>  
    </form>
   </>
  )
}

export default AddTimeEntryForm;