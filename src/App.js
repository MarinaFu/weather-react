import "./styles.css";
import React from "react";
import Weather from "./weather.js";

export default function App() {
  return (
    <div>
      <div>
        <div>
          <Weather />
          <Weather />
          <Weather />
        </div>
      </div>
      <footer>
        <a
          href="https://github.com/MarinaFu/weather-app"
          id="github-link"
          class="github-link"
        >
          Open-source code
        </a>
        by Marina Furlic
      </footer>
    </div>
  );
}
