import React from "react";
import axios from "axios";
import ReactAnimatedWeather from "react-animated-weather";
import "bootstrap/dist/css/bootstrap.min.css";
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="#000"
            size={42}
            animate={true}
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
