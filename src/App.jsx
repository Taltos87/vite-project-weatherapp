import { useState , useEffect} from 'react'
import WeatherCard from './components/WeatherCard'
import reactLogo from './assets/react.svg'
import Forecast from './components/Forecast'
import viteLogo from '/vite.svg'
import moment from 'moment/moment'
import axios from 'axios'
import Form from './components/Form'
import './App.css'

const API_KEY = '2bcda0ef514ca396d716955408357744';
//my API Key: 2bcda0ef514ca396d716955408357744


function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(``);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherDatabyCoords (latitude, longitude);
      });
    } else {
      {setError("Geolocation is not supported by this browser.");
    }
  };
  }, []);


    const fetchWeatherDatabyCoords = async (latitude, longitude) => {
     try {
       const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
       setWeather(response.data);

     const data = await response.json();
     setWeatherData(data);
   } catch (error) {
      console.log(error);
    }
  };
  

   const handleImputChange = (event) => {
    setCity(event.target.value);
   };

  const handleSubmit = (event) => {
    event.preventDefault();}







  return (
    <>
     <h2>Shecodes Weather App</h2>
      {/* <h3>React + Vite + Bootstrap</h3> */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h2>Weather in London</h2>
      
      <h3>Today is {moment().format('dddd, MMMM Do YYYY')}</h3>
      {/* <h3>Current time is {moment().format('LT')}</h3> */}
      <h3>Current temperature is {weather?.main?.temp}°C for {city}</h3>
    


      <Form 
      city={city}
      handleInputChange={handleImputChange}
      handleSubmit={handleSubmit}
       />

 

      <WeatherCard />
      <Forecast />

      <div className="card">
     
      </div>
      
      <div>
      <a href={`https://github.com/Taltos87/my-weather-app`} >Open Source Code</a> 
        <p> by Ana-Maria Paraschivu </p>

      </div>
    </>
  )
}

export default App
