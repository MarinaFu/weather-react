import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <div className="row g-0">
        <div className="col">
          <div className="first">
            {" "}
            <p> Fri </p>{" "}
          </div>
          <div className="second">
            {" "}
            <WeatherIcon code="01d" />
          </div>
          <div className="third">
            <span className="min">16°</span> <span className="max">26°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
