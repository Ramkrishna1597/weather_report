
import './App.css';
import {useState,useEffect} from "react"
import { ImLocation } from 'react-icons/im'
import { BiSearchAlt2 } from 'react-icons/bi'
import ForeCast from './Components/ForeCast';
import Current from "./Components/Current"

const autoURL = "https://api.weatherapi.com/v1/search.json?key=eef88abb5e1146f4adc133415222409&q=";

const weatherURL = (city) => `https://api.weatherapi.com/v1/forecast.json?key=eef88abb5e1146f4adc133415222409&q=${city}&days=7&aqi=no&alerts=no`

function App() {
  const [city,setCity] = useState("Indore")
  const [clicked,setClicked] = useState(false)
  const [current, setCurrent] = useState();
  const [forecast,setForecast] = useState();
  const [result, setresult] = useState(false)
  const [citySuggest, setCitySuggest] = useState([])

  const handleClick= async (clickedCity) =>{
    console.log("clicked city :",clickedCity)
    setCity(`${clickedCity.name}, ${clickedCity.region}`)
    setClicked(true)

    const resp = await fetch(weatherURL(city));
    const data = await resp.json()
    setCurrent(data.current)
    setForecast(data.forecast)
    setresult(true)

  }

  useEffect(() => {
    const getDataAfterTimeout = setTimeout(()=>{

      const fetchCitySuggestion = async() => {
        const res = await fetch(autoURL + city);
        const data = await res.json();
        setCitySuggest(data)
      
      }
      if(!clicked && city.length>2){
        fetchCitySuggestion()
      }
      else{
        setCitySuggest([])
        setClicked(false)
        setresult(false)
      }
    },500)

    return () => clearTimeout(getDataAfterTimeout)
    
   
  },[city])
  return (
    <div className="App">
    <div className="city">
     <div className='searchbox'>
      <div className="icon"><ImLocation size={20}/></div>
      <input type="text"
       className='citySearch'
       placeholder='Enter City Name'
       value={city}
       onChange = {(e) => setCity(e.target.value)} 
      />
      <div className="icon"><BiSearchAlt2 size={20}/></div>
     </div>
      <div className="suggestiondiv">
       {citySuggest.map((curCity) => 
            <div className="suggestion" onClick={() => 
             handleClick(curCity)}>
              <div className="cityInfo"><h3>{curCity.name},</h3> <p> {curCity.region}</p></div> 
              <div className="temp">
                <p>20 °C</p> 
                <img src="http://cdn.weatherapi.com/weather/64x64/night/116.png" alt="" height="20px"/>
              </div>
            </div>
        )}
      </div>
    </div>

    {result? <ForeCast  forecast = {forecast}/>:null} 
    
    {result? <Current forecast = {forecast} current = {current}/>:null}
    
    </div>
  );
}

export default App;
