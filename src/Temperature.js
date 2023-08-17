import React, { useState } from "react";
import axios from "axios";
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

      <i className="fa-solid fa-cloud top-cloud">
        <div className="forecastImage">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            width="100"
          />
        </div>
        {Math.round(temperature)}{" "}
        <span className="units">
          {" "}
          ° C │ <a href="/">° F</a>
        </span>
      </i>
      <h4>Cloudy</h4>
      <h5>Humidity: 65% Wind: strong</h5>
    </div>
  );
}
