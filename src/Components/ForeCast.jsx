
import"../App.css"

 
const ForeCast = ({ forecast:{forecastday}}) => {

  return (
    <div className='weekly'>
        
      <div className="days">
        {forecastday.map((cur) => 
            <div className="day">
               <h5>{cur.date}</h5>
               <div className="temps">{cur.day.maxtemp_c}° {cur.day.mintemp_c}°</div>
                <img src={cur.day.condition.icon} alt="" height={40}/>
                <p>{cur.day.condition.text}</p>
            </div>
        )}
     </div>
      
    </div>
  )
}

export default ForeCast
