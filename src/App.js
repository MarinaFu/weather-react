import React from "react";
import axios from "axios";
import Cities from "./Cities";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border">
          <Cities />
          <Search />
          <Temperature city="Amsterdam" />
          <Forecast />
        </div>
        <footer>
          <a
            href="https://github.com/MarinaFu/weather-react"
            id="github-link"
            className="github-link"
            target="_blank"
          >
            Open-source code
          </a>{" "}
          by Marina Furlic
        </footer>
      </div>
    </div>
  );
}
