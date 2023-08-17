import React from "react";
import Cities from "./Cities";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Cities />
      <Search />
      <Temperature city="Amsterdam" />
      <Forecast />
      <footer>
        <a
          href="https://github.com/MarinaFu/weather-app"
          id="github-link"
          className="github-link"
        >
          Open-source code
        </a>
        by Marina Furlic
      </footer>
    </div>
  );
}
