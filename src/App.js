import React from "react";
import "./styles.css";
import Header from "./Header";
import Search from "./Search";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Search defaultCity="New York" />
        <Footer />
      </div>
    </div>
  );
}