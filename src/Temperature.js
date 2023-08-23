import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Temperature.css";

export default function Temperature(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showTemperature(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      precipitation: response.data.weather[0].description,
      date: "Today 22/04/2023",
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Temperature">
        <h1>{weatherData.city}</h1>
        <h3>{weatherData.date}</h3>
        <div className="row">
          <div className="col-6">
            <div className="forecastImage">
              <ReactAnimatedWeather
                icon="CLOUDY"
                color="#000"
                size={60}
                animate={true}
              />{" "}
              <span className="temp">
                {Math.round(weatherData.temperature)}
              </span>{" "}
              <span className="units">
                {" "}
                ° C │ <a href="/">° F</a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="text-capitalize">{weatherData.precipitation}</li>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9fc1ce91583db8398ec357be4554346e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
  }
}
