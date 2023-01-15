import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherContent(props) {
  return (
    <div className="weathercontent">
      <div className="h2">
        <h2 id="searched-city">{props.data.city}</h2>
      </div>
      <div className="row">
        <div className="col-7">
          <ul>
            <li id="current-date"><FormattedDate date={props.data.date} /></li>
            <li id="weather-condition">{props.data.description}</li>
          </ul>
          <div className="weathericon" >
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
          <span className="displaytemperature" id="displaytemp">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-5">
          <ul>
            <li className="weatherstats">
              Humidity: <span id="humidity">{props.data.humidity}</span>%
        </li>
            <li className="weatherstats">
              Wind: <span id="wind">{Math.round(props.data.wind)}</span> km/h
        </li>
          </ul>
        </div>
      </div>
    </div>
  );
}