
import './App.css';
import {useState,useEffect} from "react"

const autoURL = "https://api.weatherapi.com/v1/search.json?key=eef88abb5e1146f4adc133415222409&q="

function App() {
  const [city,setCity] = useState("")
  const [citySuggest, setCitySuggest] = useState([1,2,3,4])

  useEffect(() => {
    const fetchCitySuggestion = async() => {
      const res = await fetch(autoURL + city);
      const data = await res.json();
      console.log(data)
    }
    if(city.length>2){
      fetchCitySuggestion()
    }
    else{
      setCitySuggest([])
    }
   
  },[city])
  return (
    <div className="App">
     <div>
      <input type="text"
       className='citySearch'
      placeholder='Enter City Name'
      onChange = {(e) => setCity(e.target.value)} />
      </div>
    </div>
  );
}

export default App;
