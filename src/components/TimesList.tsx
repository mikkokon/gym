import React, { useEffect } from 'react';
import closestTo from 'date-fns/closestTo'
import { getDate } from '../helpers/date-utils';

interface ITimeListProps {
  times: ITimes[]
  activityType: string
}

interface ITimes {
  amount: number
  date: Date
  id: string
  type: string
  weigth: number
}

const TimesList = (props: ITimeListProps) => {
  
  return (
    <div>
      <ol>
        {props.times.map((time: any) => 
          <li key={time.id}>
            <div className="time-entry">{getDate(time.date)}</div>
            <div className='time'>{time.type}</div>    
          </li>
        )}   
    </ol>
    </div>  
  )
}

export default TimesList;