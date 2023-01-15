import React from "react";
import cloud from "./media/cloud.png";

export default function Temperature() {
  return (
    <div className="col-7">
      <ul>
        <li id="current-date">Sunday January 15th</li>
        <li id="current-time">15:02 o clock</li>
        <li id="weather-condition">Clear sky</li>
      </ul>
      <img className="weathericon" id="weathericon" src={cloud} alt="" />
      <span className="displaytemperature" id="displaytemp">
        6
      </span>
      <span className="unit">°C</span>
    </div>
  );
}
