import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <h1>
          Weather Forecast !{" "}
          <span role="img" aria-label="sun">
            🌞
          </span>
        </h1>
      </header>
    </div>
  );
}