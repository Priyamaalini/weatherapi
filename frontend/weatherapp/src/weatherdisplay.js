import React from 'react';
import './App.css';
const WeatherDisplay= ({weatherData}) => {
    console.log(weatherData);
    return (
        
        <div>
            <div className='headimg'>
            <h2>{weatherData.location}</h2>
            <img className='image' src={weatherData.icon} alt='img'/></div><br/>
            <p>Temp (C) : {weatherData.temperature_c} °C</p><br/>
            <p>Temp (F) : {weatherData.temperature_f} °F</p><br/>
            <p>Country : {weatherData.Country}</p><br/>
            <p>Status : {weatherData.description}</p><br/>
          
        </div>
    );
};

export default WeatherDisplay;