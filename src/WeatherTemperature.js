import React, { useState } from "react";
import "./CurrentTemperature.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherTemperature(props){
    const [unit, setUnit] = useState('celsius');
    function showFahrenheit(event){
    event.preventDefault();
    setUnit("fahrenheit");
}

    function showCelsius(event){
        event.preventDefault();
        setUnit("celsius");
    }
    if (unit === "celsius"){
return (
      <h3>
        <WeatherIcon code={props.code} />
            <span className="temp-change">{Math.round(props.celsius)}</span>
            <span className="units">
              º
              <a href="/" className="celsius active">
                C
              </a>{" "}
              | {" "}
              <a href="/" onClick={showFahrenheit} className="fahrenheit">
                F
              </a>
            </span>
          </h3>);
    } else {
        let fahrenheitTemp = Math.round((props.celsius * 9/5) + 32); 
        return (
          
      <h3>
        <WeatherIcon code={props.code} />
            <span className="temp-change">{fahrenheitTemp}</span>
            <span className="units">
              º
              <a href="/" onClick={showCelsius} className="celsius">
                C
              </a>{" "}
              | {" "}
              <a href="/" className="fahrenheit active">
                F
              </a>
            </span>
          </h3>
          );
    }

}
      
      
      
      