import { useState , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import moment from 'moment/moment'
import axios from 'axios'
import Form from './components/Form'
import WeatherCard from './components/WeatherCard'
import Forecast from './components/Forecast'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
     <h2>Shecodes Weather App</h2>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

      </div>

      <h2>Weather in London</h2>
      <Form />
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
