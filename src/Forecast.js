import React, { useState, useEffect } from "react";
import "./forcast.css";
import axios from "axios";
import DayForcasts from "./DayForcasts";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="SevenDays">
        <div className="row">
          {forecast &&
            forecast.map(function (dailyForecast, index) {
              if (index < 7) {
                return (
                  <div className="col" key={index}>
                    <DayForcasts data={dailyForecast} />
                  </div>
                );
              }
              return null;
            })}
        </div>
      </div>
    );
  } else {
    let apiKey = "e450bc345a80a08ada69fd5c714d871d";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
