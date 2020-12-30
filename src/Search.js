import React, { useState } from "react";
import "./Search.css";
import "./styles.css";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature";
import TimeForecast from "./TimeForecast";
import Footer from "./Footer";

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
      timezone: response.data.timezone,
    })
   
  }
  let backgroundClass = "container";
  let time = new Date();
  let localTime = time.getTimezoneOffset() * 60;
  time.setSeconds(time.getSeconds() + localTime + weatherData.timezone);
  let hours = time.getHours();
  if (hours >= 20 && hours < 24) {
    backgroundClass = "container evening"
  } 
  if (hours >=5 && hours < 17){
    backgroundClass = "container morning";
  }

  if (hours >= 17 && hours < 20){
    backgroundClass = "container afternoon"
  }
  if (hours >= 0 && hours < 5){
    backgroundClass = "container evening";
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
     <div className={backgroundClass}>
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
          <div className="col-3">
            <input
              type="submit"
              value="🔎"
              className="btn search-submit "
            />
          </div>
        </div>
      </form>
        <div className="row info">
          <CurrentTemperature info={weatherData} />
          <TimeForecast city={weatherData.city} timezone={weatherData.timezone}/>
        </div>
    </div>
       <Footer />
    </div>);
     } else {
      searchCity();
      return "Loading..."; 
  }
 
}