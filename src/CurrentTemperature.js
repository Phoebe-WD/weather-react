import React from "react";
import "./CurrentTemperature.css";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentTemperature(props) {
 
return (
    <div className="CurrentTemperature col 12">
      <div className="clearfix weather-temperature">
        <div className="row currently">
          <div className="col-6">
        <h2 className="city currently-city"> {props.info.city}</h2>
        <h3>
         
          <FormattedDate timezone={props.info.timezone}/>
          <br />
        </h3>

          <WeatherTemperature celsius={props.info.temperature}/>

          <WeatherIcon code={props.info.icon} alt={props.info.description}/>
          <span className="weather"> {props.info.description}</span>
          </div>
            <div className="col-6 description">
          <h4 className="prec">
            <i className="fas fa-water"></i> {" "}
            <span className="humidity">Humidity: {props.info.humidity}%</span> <br />
            <i className="fas fa-wind"></i> {" "}
            <span className="wind">Wind: {Math.round(props.info.wind)} km/h</span>
            <br />
          </h4>
          </div>
        </div>
      </div>
    </div> );
 

}