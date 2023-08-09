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
        size={props.size}
        color={{
          sun: "rgb(250, 244, 183)",
          moon: "rgb(249, 249, 249)",
          light_cloud: "rgb(221, 230, 237",
          cloud: "rgb(157, 178, 191)",
          dark_cloud: "rgb(82, 109, 130)",
          rain: "rgb(140, 171, 255)",
          snow: "rgb(241, 240, 232)",
          thunder: "rgb(238, 224, 201)",
          wind: "rgb(228, 133, 134)",
          leaf: "rgb(145, 109, 179)",
          hail: "rgb(212, 250, 252)",
          sleet: "rgb(184, 231, 225)",
          fog: "rgb(221, 230, 237)",
        }}
      />
    </div>
  );
}
