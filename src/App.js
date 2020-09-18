import React from "react";
import logo from "./logo.svg";
import Nav from "./components/nav";
import Content from "./components/content";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content-wrapper">
        <Nav />
        <Content />
      </div>
    </div>
  );
}

export default App;
