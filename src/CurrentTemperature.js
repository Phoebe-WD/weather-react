import React from "react";
import "./CurrentTemperature.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function CurrentTemperature(props) {
 
return (
    <div className="CurrentTemperature col-6">
      <div className="clearfix weather-temperature">
        <h2 className="city currently-city"> {props.info.city}</h2>
        <h3>
         
          <FormattedDate date={props.info.date}/>
          <br />
        </h3>
        <div className="currently">
          <h3>
            <span className="temp-change">{Math.round(props.info.temperature)}</span>
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
          <WeatherIcon code={props.info.icon} alt={props.info.description}/>
          <span className="weather"> {props.info.description}</span>
          <h4 className="prec">
            <i className="fas fa-water"></i> Humidity:
            <span className="humidity">{props.info.humidity}</span>% <br />
            <i className="fas fa-wind"></i> Wind:{" "}
            <span className="wind">{props.info.wind}</span> km/h
            <br />
          </h4>
        </div>
      </div>
    </div> );
 
 
  function showFahrenheit(event) {
    event.preventDefault();

    alert("Convert to fahrenheit");
  }
}