import React from "react";
import axios from "axios";
import TodayDate from "./TodayDate";
import "./Temperature.css";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h3>
        {" "}
        <TodayDate date={props.data.date} />
      </h3>
      <div className="row">
        <div className="col-6">
          <div className="forecastImage">
            <WeatherIcon code={props.data.icon} />{" "}
            <span className="temp">{Math.round(props.data.temperature)}</span>{" "}
            <span className="units"> ° C</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="text-capitalize">{props.data.precipitation}</li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
