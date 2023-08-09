import React from "react";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import Icon from "./WeatherIcons";
import WeatherTemp from "./WeatherTemp";

export default function InfoWeather(props) {
  return (
    <div className="info">
      <div className="intro">
        <ul>
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </ul>
      </div>

      <div className="row">
        <div className=" collum col-3">
          <div className="iconMian">
            <Icon
              code={props.data.icon}
              alt={props.data.description}
              size={53}
              className="icon"
            />
          </div>
        </div>
        <div className=" collum col-3">
          <div className="tempIcon">
            <WeatherTemp celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
          <div className="Extra">
            <ul>
              <p className="text-capitalize">{props.data.description}</p>
              <p>Humidity: {props.data.humidity}%</p>
              <p>Wind speed: {props.data.wind} km/h</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
