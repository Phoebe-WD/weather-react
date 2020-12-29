import React, { useState } from "react";
import "./TimeForecast.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function TimeForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleForecast(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name){
    return (
    <div className="TimeForecast col-6 container-forecast">
      <div className="clearfix forecast-container">
        <ul className="forecast">
          <WeatherForecast data={forecast.list[0]} />
          <br/>
          <WeatherForecast data={forecast.list[1]} />
          <br/>
          <WeatherForecast data={forecast.list[2]} />
          <br/>
          <WeatherForecast data={forecast.list[3]} />
        </ul>
      </div>
    </div>
  );
  } else {
let apiKey = "d2e40d95d91ed55f8cbce96d72d19bf0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecast);
 return null;
  }


  
}
