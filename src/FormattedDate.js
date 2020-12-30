import React from "react";
import "./CurrentTemperature.css";

export default function FormattedDate(props){
    let time = new Date();
    let localTime = time.getTimezoneOffset() * 60;
    time.setSeconds(time.getSeconds() + localTime + props.timezone);
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[time.getDay()];
    let hour = time.getHours();
       if (hour < 10){
        hour = `0${hour}`;
    }
    let minute = time.getMinutes();
    if (minute < 10){
        minute = `0${minute}`;
    }
    return  (<span className="currently-date"> {day} {hour}:{minute} </span>);
}