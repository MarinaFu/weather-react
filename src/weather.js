import "./styles.css";
import React, { useState } from "react";
import axios from "axios";
import Search from "./search";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <div className="page">
        <div className="card top-card">
          <div className="card-body">
            <ul className="current-details">
              <li>Last updated: {weatherData.date}</li>
            </ul>
            <h1 id="searchCity"> {weatherData.city}</h1>
            <h2 className="fa-solid fa-cloud top-cloud">
              {weatherData.temperature}°C{" "}
            </h2>

            <h5>
              <ul className="current-details">
                <li id="description"></li>
                <li> Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind}km/h</li>

                <li>{weatherData.description}</li>
              </ul>
            </h5>
            <search />
          </div>
        </div>
      </div>
    </div>
  );
}
