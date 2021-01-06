import React, { useState, useEffect } from 'react';

interface INumberPadProps {
  bgOpacity?: any
  bgColor?:any
  numberButtonColor?: any
  cButtonColor?: any
  enterButtonColor?: any
  onSubmit?: any 
}

const Sports = (props: INumberPadProps) => {
  
  const [numbers, setNumbers] = useState<any>('')

  const handleNumber = (inputNumber: any) => {
    setNumbers((prev:any) => prev + inputNumber )
  }

  const onSubmit = (event:any) => {
    event.preventDefault();
    const c = parseInt(numbers)
    console.log('c: ', c)
  }
  
return (  
  <>
    <div>{numbers}</div>
    <form onSubmit={onSubmit}>
      {/* tee mapilla   */}
      <div className='container' >
        <div onClick={() => handleNumber('1')}>1</div>
        <div onClick={() => handleNumber('2')}>2</div>
        <div onClick={() => handleNumber('3')}>3</div>
        <div onClick={() => handleNumber('4')}>4</div>
        <div onClick={() => handleNumber('5')}>5</div>
        <div onClick={() => handleNumber('6')}>6</div>
        <div onClick={() => handleNumber('7')}>7</div>
        <div onClick={() => handleNumber('8')}>8</div>
        <div onClick={() => handleNumber('9')}>9</div>
        <div onClick={() => handleNumber('0')}>0</div>
        <div onClick={() => setNumbers('')}>C</div>
        <div className='ok' onClick={() => setNumbers('')}>v</div>
      </div> 
      <button>Add</button>  
    </form>
  </>
)

}
export default Sports