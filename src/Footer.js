import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        Made by{" "}
        <a href="https://www.linkedin.com/in/phoebe-wilckens/" className="name">
          Phoebe W.
        </a>
        <br />
        <a
          href="https://github.com/Phoebe-WD/weather-react"
          className="source-code"
        >
          open-source code
        </a>
      </footer>
    </div>
  );
}