import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Made by{" "}
        <a href="https://www.linkedin.com/in/phoebe-wilckens/" className="name" target="_blank" rel="noreferrer">
          Phoebe W.
        </a>
        <br />
        <a
          href="https://github.com/Phoebe-WD/weather-react"
          className="source-code" target="_blank" rel="noreferrer"
        >
          open-source code
        </a>
      </footer>
    </div>
  );
}