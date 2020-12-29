import React from "react";
import "./styles.css";
import Header from "./Header";
import Search from "./Search";


export default function App() {
  return (
    <div className="App">
      <Header />
      <Search defaultCity="New York" />
    </div>
  );
}