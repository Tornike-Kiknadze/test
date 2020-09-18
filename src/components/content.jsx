import React from "react";
import "../App.css";
import Header from "./content/header";
import Filter from "./content/filter";
import Main from "./content/main";

function Content() {
  return (
    <div className="content">
      <Header />
      <Filter />
      <Main />
    </div>
  );
}

export default Content;
