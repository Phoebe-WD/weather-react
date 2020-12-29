import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature";
import TimeForecast from "./TimeForecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState (props.defaultCity);
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
    })
   
  }

  function searchCity(){
    const apiKey = "d2e40d95d91ed55f8cbce96d72d19bf0";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event){
    event.preventDefault();
    searchCity(city);
  }

  function handleCity(event){
    setCity(event.target.value);
  }

  if (weatherData.ready){
  return (
    <div className="Search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="row search-engine">
          <div className="col-9">
            <input
              type="search"
              className="form-control"
              id="validationTooltipUsername"
              placeholder="Search City"
              onChange={handleCity}
              aria-describedby="validationTooltipUsernamePrepend"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search 🌎"
              className="btn search-submit "
            />
          </div>
        </div>
      </form>
        <div className="row info">
          <CurrentTemperature info={weatherData} />
          <TimeForecast city={weatherData.city} />
        </div>
    </div>);
     } else {
      searchCity();
      return "Loading..."; 
  }
 
}