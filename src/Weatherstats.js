import React from "react";

export default function Weatherstats() {
  return (
    <div className="col-4">
      <ul>
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
