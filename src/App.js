import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import Temperature from "./Temperature";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="border">
          <Temperature defaultCity="Amsterdam" />
        </div>
        <footer>
          <a
            href="https://github.com/MarinaFu/weather-react"
            id="github-link"
            className="github-link"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by Marina Furlic
        </footer>
      </div>
    </div>
  );
}
