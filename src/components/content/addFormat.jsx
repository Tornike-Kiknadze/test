import React from "react";
import "../../App.css";

function AddFormat() {
  return (
    <div className="content-format">
      <div className="content-format__heading">
        <p>Ad Formats</p>
        <p>Mobile Ad, Search Ad, Faceebok Timeline…</p>
      </div>
      <div className="content-format__content">
        <div className="content-format__content__snippet">
          <p>Create Campaign</p>
          <span> done</span>
        </div>
        <div className="content-format__content__snippet">
          <p>Choose Audience </p>
          <span> done</span>
        </div>
        <div className="content-format__content__snippet">
          <p> Choose Budget & Dates</p>
          <span> done</span>
        </div>
        <div className="content-format__content__snippet">
          <p>Generate Ad Media</p>
          <span> done</span>
        </div>
      </div>
    </div>
  );
}

export default AddFormat;
