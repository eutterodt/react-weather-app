import React from "react";
import axios from "axios";

export default function Weatherstats() {
  return (
    <div className="col-5">
      <ul>
        <li className="weatherstats">
          Precipitation: <span id="precipitation">15</span>%
        </li>
        <li className="weatherstats">
          Humidity: <span id="humidity">86</span>%
        </li>
        <li className="weatherstats">
          Wind: <span id="wind">2</span> km/h
        </li>
      </ul>
    </div>
  );
}
