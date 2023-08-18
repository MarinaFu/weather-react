import React, { useState } from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "./Temperature.css";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(null);
  function showTemperature(response) {
    setTemperature(response.data.main.temp);
  }
  let apiKey = "9fc1ce91583db8398ec357be4554346e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  return (
    <div className="Temperature">
      <h3>Today 22/04/2023</h3>
      <h1>{props.city}</h1>
      <div className="row">
        <div className="col-6">
          <div className="forecastImage">
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="#000"
              size={48}
              animate={true}
            />{" "}
          </div>
          {Math.round(temperature)}{" "}
          <span className="units">
            {" "}
            ° C │ <a href="/">° F</a>
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Cloudy</li>
            <li>Humidity: 65% </li>
            <li>Wind: strong</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
