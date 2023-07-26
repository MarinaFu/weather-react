import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  let [city, setCity] = useState("");
  let [searchResult, setsearchResult] = useState("");

  function handleSubmit(response) {
    let weather = {
      temperature: Math.round(response.data.temperature.current),
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
    };
    setsearchResult(
      <ul>
        <li>Temperature: {weather.temperature}°C</li>
        <li>Description: {weather.description} </li>
        <li>Humidity: {weather.humidity}%</li>
        <li>Wind: {weather.wind} km/h</li>
        <li>
          {" "}
          <img src={weather.icon} alt="icon"></img>
        </li>
      </ul>
    );
  }
  function showDetails(event) {
    event.preventDefault();
    let apiKey = "a49f0cad903e09dc8e1t8o40aab88ab3";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(handleSubmit);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="searching-engine">
      <form onSubmit={showDetails}>
        <input
          type="text"
          placeholder="Enter a city..."
          autoFocus={false}
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
      <h2>{searchResult}</h2>
    </div>
  );
}
