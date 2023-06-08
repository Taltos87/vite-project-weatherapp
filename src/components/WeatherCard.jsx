import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="card-body-weather">
      <h2 className='card-title'>{weatherData.data}</h2>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='weather icon' />
        <p> Tempreture: {Math.round(weatherData.temp)}°C</p>
        <p>Humidity: {weatherData.humidity}%</p>
        <p>Wind: {Math.round(weatherData.speed)} km/h</p>
        {/* <p>Pressure: {weatherData.main.pressure} hPa</p> */}
        {/* <p>Visibility: {weatherData.visibility / 1000} km</p> */}
        {/* <p>Weather: {weatherData.weather[0].description}</p> */}
        {/* <p>Clouds: {weatherData.clouds.all}%</p> */}
        </div>
    </div>
  );
};

export default WeatherCard;
