import React from "react";
import FrormattedDate from "./FormattedDate";
import Icon from "./WeatherIcons";

export default function InfoWeather(props) {
  return (
    <div className="info">
      <div className="Intro">
        <ul>
          <h1>{props.data.city}</h1>
          <FrormattedDate date={props.data.icon} />
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="tempBox">
            <div className="float-left">
              <Icon code={props.data.icon} alt={props.data.description} />
            </div>
            <div className="float-left">
              <span className="temprature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="unit">C</span>
            </div>

            <p className="text-capitalize">{props.data.discription}</p>
          </div>
        </div>
        <div className="col-6">
          <div className="Extra">
            <ul>
              <p>Humidity:{props.data.humidity}%</p>
              <p>Wind speed:{props.data.wind}km/h</p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
