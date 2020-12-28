import React, { useState } from "react";
import "./CurrentTemperature.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function CurrentTemperature(props) {
 
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/10d@2x.png",
      date: new Date(response.data.dt * 1000)
    })
   
  }
  if (weatherData.ready){
return (
    <div className="CurrentTemperature col-6">
      <div className="clearfix weather-temperature">
        <h2 className="city currently-city"> {weatherData.city}</h2>
        <h3>
         
          <FormattedDate date={weatherData.date}/>
          <br />
        </h3>
        <div className="currently">
          <h3>
            <span className="temp-change">{Math.round(weatherData.temperature)}</span>
            <span className="units">
              º
              <a href="/" className="celsius active">
                C
              </a>{" "}
              |
              <a href="/" onClick={showFahrenheit} className="fahrenheit">
                F
              </a>
            </span>
          </h3>
          <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="img-today"
          />
          <span className="weather"> {weatherData.description}</span>
          <h4 className="prec">
            <i className="fas fa-water"></i> Humidity:
            <span className="humidity">{weatherData.humidity}</span>% <br />
            <i className="fas fa-wind"></i> Wind:{" "}
            <span className="wind">{weatherData.wind}</span> km/h
            <br />
          </h4>
        </div>
      </div>
    </div> );
  } else {
    const apiKey = "d2e40d95d91ed55f8cbce96d72d19bf0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
 
  function showFahrenheit(event) {
    event.preventDefault();

    alert("Convert to fahrenheit");
  }
}