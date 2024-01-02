import React from "react";
import "../App.css";
import GetDino from "./GetDino.js";
import Header from "./Header.js";

export default function App() {
  return (
    <React.Fragment>
      <Header />
      <GetDino />
    </React.Fragment>
  );
}
