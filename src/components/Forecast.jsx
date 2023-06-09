import React from 'react';
import "../styles/Forecast.css";

const Forecast = ({ forecastData }) => {
  return (
    <div>
      
      <div className="forecast-container">
        {forecastData.map((day) => (
          <div className="forecast-card" key={day.date}>
            <p className="forecast-date">{day.date}</p>
            <img src={day.icon} alt={day.weatherDescription} className="forecast-icon" />
            <p className="forecast-temp">{Math.round(day.temperature)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
