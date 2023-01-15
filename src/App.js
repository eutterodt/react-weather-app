import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import WeatherContent from "./WeatherContent";

export default function WeatherApp() {
  const [city, setCity] = useState("New York");
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      image: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function search() {
    let apiKey = "ddf91e7f98ae542cfe124eef0bb0b9fb";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);

  }

  function handleCityChange(event) {
    setCity(event.target.value);

  }

  if (weatherData.ready) {
    return (
      <div className="outer-wrapper">
        <div className="container">
          <div className="wrapper">
            <div className="head">
              <h1>Weather Application</h1>
              <form className="search-form" id="search" onSubmit={handleSubmit}>
                <input
                  className="inputfield"
                  id="city-search-input"
                  type="text"
                  placeholder="City Name"
                  onChange={handleCityChange}
                />
                <input
                  className="submitbutton"
                  id="submit"
                  type="submit"
                  value="Search"
                />
              </form>
            </div>
            <WeatherContent data={weatherData} />

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
  } else {
    search();
    return "Loading …"
  }
}
