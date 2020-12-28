import React from "react";
import "./TimeForecast.css";

export default function TimeForecast() {
  return (
    <div className="TimeForecast col-6 container-forecast">
      <div className="clearfix forecast-container">
        <ul className="forecast">
          <li>
            <h3>15:00</h3>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="prop" />
            <span className="temps">
              <span className="temp-max">20º</span> /
              <span className="temp-min">10º</span>
            </span>
          </li>
          <li>
            <h3>18:00</h3>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="prop" />
            <span className="temps">
              <span className="temp-max">20º</span> /
              <span className="temp-min">10º</span>
            </span>
          </li>
          <li>
            <h3>21:00</h3>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="prop" />
            <span className="temps">
              <span className="temp-max">20º</span> /
              <span className="temp-min">10º</span>
            </span>
          </li>
          <li>
            <h3>00:00</h3>
            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="prop" />
            <span className="temps">
              <span className="temp-max">20º</span> /
              <span className="temp-min">10º</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
