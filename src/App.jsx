import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Shecodes Weather App</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
     

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
