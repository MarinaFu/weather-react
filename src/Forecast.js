import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Fri </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">16°</span>
          <span className="max">26°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Sat </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">17°</span>
          <span className="max">25°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Sun </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">15°</span>
          <span className="max">24°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Mon </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/03d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">16°</span>
          <span className="max">27°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Tue </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">19°</span>
          <span className="max">28°</span>
        </div>
      </div>
      <div className="col-2">
        <div className="first">
          {" "}
          <p> Wed </p>{" "}
        </div>
        <div className="second">
          {" "}
          <img
            src="https://openweathermap.org/img/wn/04d@2x.png"
            alt=""
            width="42"
          />
        </div>
        <div className="third">
          <span className="min">17°</span>
          <span className="max">25°</span>
        </div>
      </div>
    </div>
  );
}
