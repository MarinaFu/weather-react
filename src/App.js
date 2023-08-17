import React from "react";
import Search from "./Search";
import Temperature from "./Temperature";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Temperature />
      <Forecast />
    </div>
  );
}
