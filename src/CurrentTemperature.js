import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  function showFahrenheit(event) {
    event.preventDefault();

    alert("Convert to fahrenheit");
  }
  return (
    <div className="CurrentTemperature col-6">
      <div className="clearfix weather-temperature">
        <h2 className="city currently-city"> New York</h2>
        <h3>
          <span className="currently-date"> Wednesday 13:00</span> <br />
        </h3>
        <div className="currently">
          <h3>
            <span className="temp-change">0</span>
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
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            className="img-today"
          />
          <span className="weather"> Overcast Clouds</span>
          <h4 className="prec">
            <i className="fas fa-water"></i> Humidity:
            <span className="humidity">75</span>% <br />
            <i className="fas fa-wind"></i> Wind:{" "}
            <span className="wind">6</span> km/h
            <br />
          </h4>
        </div>
      </div>
    </div>
  );
}