import React from "react";
import FormattedDate from "./FormattedDate";
import Icon from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

export default function InfoWeather(props) {
  return (
    <div className="info">
      <div className="Intro">
        <ul>
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="tempBox">
            <div className="float-left">
              <Icon code={props.data.icon} alt={props.data.description} />
            </div>
            <div className="float-left">
              <WeatherTemp code={props.data.temperature} />
            </div>

            <p className="text-capitalize">{props.data.description}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="Extra">
            <ul>
              <p>Humidity: {props.data.humidity}%</p>
              <p>Wind speed: {props.data.wind} km/h</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
