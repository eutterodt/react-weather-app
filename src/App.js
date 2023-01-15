import React from "react";
import "./styles.css";
import cloud from "./media/cloud.png";
import axios from "axios";

export default function WeatherApp() {
  let apiKey = "ddf91e7f98ae542cfe124eef0bb0b9fb";
  let city = "London";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${city}&appid=${apiKey}&units=metric`;
  return (
    <div className="outer-wrapper">
      <div className="container">
        <div className="wrapper">
          <div className="head">
            <h1>Weather Application</h1>
            <form className="search-form" id="search">
              <input
                className="inputfield"
                id="city-search-input"
                type="text"
                placeholder="City Name"
              />
              <input
                className="submitbutton"
                id="submit"
                type="submit"
                value="Search"
              />
            </form>
          </div>
          <div className="h2">
            <h2 id="searched-city">New York</h2>
          </div>
          <div className="row">
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
          </div>
        </div>
        <small>
          Coded by Elisa Utterodt {" "}
          <a
            className="github-link"
            href="https://github.com/eutterodt/react-weather-app"
            target="blank"
            rel="noreferrer"
            aria-label="link to github"
          >
            view open source code on github
      </a>
        </small>
      </div>
    </div>
  );
}
