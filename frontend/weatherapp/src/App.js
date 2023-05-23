import React, { useState } from 'react';
import './App.css';
import axios from "axios";
import SearchForm from "./searchForm";
import WeatherDisplay from "./weatherdisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchWeatherData = async (location) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/?location=${location}`);
      setWeatherData(response.data);
    } 
    catch (error) {

      console.log(error);
    }
  };

 

  return (
   
    <div className="main">

      <div>
        <h1 className="heading1">Know your weather up to date</h1></div><br/><br/>
      <div className="card">
        <h1>Weather Details</h1><br />
        <SearchForm onSearch={fetchWeatherData} />
        {weatherData && <WeatherDisplay weatherData={weatherData} />}
      </div>
      
    </div>
      
  );
};

export default App;