import "./styles.css";
import React from "react";

import Search from "./search";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="page">
        <div className="card top-card">
          <div className="card-body">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
