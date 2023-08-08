import React from "react";
import Icon from "./WeatherIcons";

export default function DayForcasts(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="weekday">{day()}</div>
      <Icon code={props.data.weather[0].icon} size={32} />
      <div className="DaysForecastTemp">
        <span className="High">{maxTemperature()}°</span>
        <span className="Low">| {minTemperature()}°</span>
      </div>
    </div>
  );
}
