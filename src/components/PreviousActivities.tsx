
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

const PreviousActivities = (props: ITimeListProps) => {
  
  return (
    <div>
      <h4>EDELLISET</h4>
      <div>
        {props.times.map((item:any) => 
          <div key={item.id}>
            <div style={{display:'flex'}}>
              <div>{item.type}: </div>
              <div>{item.weigth}</div> 
              <div>/</div> 
              <div>{item.amount}</div> 
            </div>
                  
          </div>
        )}
      
    </div>
    </div>  
  )
}

export default PreviousActivities;

  /* {props.times.map((time: any) => 
          <li key={time.id}>
            <div className="time-entry">{getDate(time.date)}</div>
            <div className='time'>{time.type}</div>    
          </li>
        )}    */