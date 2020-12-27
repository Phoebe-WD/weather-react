import React from "react";
import "./styles.css";
import Header from "./Header";
import Search from "./Search";
import CurrentTemperature from "./CurrentTemperature";
import TimeForecast from "./TimeForecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search />
        <div className="row info">
          <CurrentTemperature defaultCity="Berlin" />
          <TimeForecast />
        </div>
        <Footer />
      </div>
    </div>
  );
}