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
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(``);


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherDataByCoords (latitude, longitude);
      },
      (error) => {
          console.log(error);
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
  };
  }, []);


    const fetchWeatherDataByCoords = async (latitude, longitude) => {
     try {
       const response = await fetch(
    
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Something went wrong!'); 
        }
    const data = await response.json();
    setWeatherData(data.current);
//     console.log(data);
// setForecastData(data.daily.slice(1, 8).map((day) => ({
//  date: moment.unix(day.dt).format('MMM D'),
//  temperature: day.temp.day,
//  weatherDescription: day.weather[0].description,
//  icon: `https://openweathermap.org/img/w/${day.weather[0].icon}.png`
// })));
// console.log(data);
    setWeatherData(data);
     setError('');
   } catch (error) {
    console.log(error);
    setWeatherData(null);
    setError('Something went wrong!');    
    }
  };
  
  

   const handleInputChange = (event) => {
    setCity(event.target.value);
   };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
   const response = await fetch (
    `https://api.openweathermap.org/data/2.5/onecall?q=${city}&appid=${API_KEY}&units=metric`
    );
    if (!response.ok) {
      throw new Error('City not found!');
    }
    const data = await response.json();
    setWeatherData(data);
    setError('');
  } catch (error) {
    setWeatherData(null);
    setError('City not found!');
  }
};
console.log(weatherData);

  return (
    <>
     <h2>Shecodes Weather App</h2>
      <h3>React + Vite + Bootstrap</h3> 
       <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img
            src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
            className="logo bootstrap"
            alt="Bootstrap logo"
          />
        </div>
  

      
       <div>

   <Form city={city} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
   
   {weatherData && (
  <div>
    <p>Today is {moment().format('dddd, MMMM Do YYYY')}</p>
    <p>Current time is {moment().format('LT')}</p>
    <WeatherCard weatherData={weatherData} />


    {forecastData.length > 0 && <Forecast forecastData={forecastData} />}

  </div>
)}

  {error && <p className=''>{error}</p>}    
      </div>
        <div>
            <a href={`https://github.com/Taltos87/my-weather-app`}>Open Source Code</a>
            <p> by Ana-Maria Paraschivu </p>

          </div>
    </>
  )
};

export default App
