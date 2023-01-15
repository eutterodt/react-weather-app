import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "RAIN",
    "11n": "RAIN",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  }

  const colorMapping = {
    "01d": "yellow",
    "01n": "gray",
    "02d": "gray",
    "02n": "gray",
    "03d": "gray",
    "03n": "gray",
    "04d": "darkgray",
    "04n": "darkgray",
    "09d": "#5f9ea",
    "09n": "#5f9ea",
    "10d": "#5f9ea",
    "10n": "#5f9ea",
    "11d": "#5f9ea",
    "11n": "#5f9ea",
    "13d": "lightgray",
    "13n": "lightgray",
    "50d": "lightgray",
    "50n": "lightgray",

  }
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={colorMapping[props.code]}
      size={55}
      animate={true}
    />
  );

}