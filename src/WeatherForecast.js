import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./TimeForecast.css";

export default function WeatherForecast(props){
    function hours(){
        let date = new Date(props.data.dt * 1000);
        let localTime = date.getTimezoneOffset() * 60;
        date.setSeconds(date.getSeconds() + localTime + props.timezone);
        let hours = date.getHours();
        return `${hours}:00`;
    }
    function temperature(){
        let tempMax = Math.round(props.data.main.temp_max);
        let tempMin = Math.round(props.data.main.temp_min);
        return `${tempMax}º / ${tempMin}º`;
    }
    return (
        <div className="col-2 forecast-info">
            <h3>{hours()}</h3> {" "}
            <WeatherIcon code={props.data.weather[0].icon} alt={props.data.description}/>
            <span className="temps">
              {temperature()}
            </span>
        </div>
    );
}