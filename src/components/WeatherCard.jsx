import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="card-body-weather">
      <h2 className='card-title'>{weatherData.name }</h2>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='weather icon' />
        <p> Temperature: {Math.round(weatherData.main.temp)}°C</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Wind: {Math.round(weatherData.wind.speed)} km/h</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        
        </div>
    </div>
  );
};

export default WeatherCard;
