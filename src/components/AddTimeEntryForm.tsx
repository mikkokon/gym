import React from 'react';

const AddTimeEntryForm = () => (
  <form>
    <h4>Add Time Entry</h4>
    <div>
      <label>Title</label>
      <input type='text' />
    </div>
    <div>
      <label>Time</label>
      <input type='number' />
    </div>
    <button>Add Time Entry</button>  
  </form>
)

export default AddTimeEntryForm;