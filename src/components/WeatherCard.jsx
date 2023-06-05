import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/WeatherCard.css'

const WeatherCard = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="card-body-weather">
        <h2 className="card-title">WeatherData</h2>
        <p>Tempreture: </p>
        <p>Humidity: </p>
        </div>
    </div>
  );
};

export default WeatherCard;
