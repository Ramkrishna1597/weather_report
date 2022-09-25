import React, { useEffect, useState } from 'react'
import"../App.css"

 
const ForeCast = ({ forecast:{forecastday}}) => {
    const key = "a9f97e4af8263f6c0367aa8155832086";
    const liveData = () => {
        navigator.geolocation.getCurrentPosition((success) => {
          // console.log('success:', success)
          let lat = success.coords.latitude;
          // console.log('lat:', lat)
          let lon = success.coords.longitude;
          // console.log('lon:', lon)
      
          fetch(
            `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&appid=${key}&units=metric`
          )
            .then((res) => res.json())
            .then((data) => {
              console.log('data:', data)        
              ;
            });
        });
      };
      liveData();

 

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
