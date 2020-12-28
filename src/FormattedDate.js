import React from "react";
import "./CurrentTemperature.css";

export default function FormattedDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
       if (hour < 10){
        hour = `0${hour}`;
    }
    let minute = props.date.getMinutes();
    if (minute < 10){
        minute = `0${minute}`;
    }
    return  (<span className="currently-date"> {day} {hour}:{minute} </span>);
}