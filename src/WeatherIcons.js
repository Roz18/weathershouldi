import React from "react";
import { ReactSkycon } from "react-skycons-extended";

export default function Icon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "09n": "RAIN",
    "10d": "SHOWERS_DAY",
    "10n": "SHOWERS_NIGHT",
    "50n": "SNOW",
    "50d": "FOG",
    "11d": "THUNDER_SHOWERS_DAY",
    "11n": "THUNDER_SHOWERS_NIGHT",
  };

  return (
    <div className="icon">
      <ReactSkycon
        icon={codeMapping[props.code]}
        size={50}
        color={{ moon: "pink", light_cloud: "pink" }}
      />
    </div>
  );
}
