import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input type="search" />
        <input type="submit" value="Search" />
        <input type="submit" value="Current" />
      </form>
    </div>
  );
}
