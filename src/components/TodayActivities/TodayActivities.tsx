import { getDate } from "../../helpers/date-utils";
import './TodayActivities.css' 

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

const TodayActivities = (props: ITimeListProps) => {
  console.log('timelist today: ', props.times)
  return (
    <div>
      <h4>TODAY</h4>
      
      <div>{props.times[0]?.type}</div>
      {props.times.map((item:any) => 
         <div key={item.id} className="flex-container">
          <div className="item1">{item.weigth}</div>
          <div className="item2">{item.amount}</div>
         </div>  
      )}
    </div>
    
    // <div>
    //   <ol>
    //     {props.times.map((time: any) => 
    //       <li key={time.id}>
    //         <div className="time-entry">{getDate(time.date)}</div>
    //         <div className='time'>{time.type}</div>    
    //       </li>
    //     )}   
    // </ol>
    // </div>  
  )
}

export default TodayActivities;