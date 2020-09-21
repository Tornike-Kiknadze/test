import React from "react";
import "../../App.css";
import check from "../content/assets/check.svg";
import arrow from "../content/assets/down-arrow.png";

function AddFormat() {
  return (
    <div className="content-format">
      <div className="content-format__heading">
        <p>Ad Formats</p>
        <p>Mobile Ad, Search Ad, Faceebok Timeline…</p>
      </div>
      <div className="content-format__content">
        <div className="content-format__content__snippet">
          <div>
            {" "}
            <p>Create Campaign</p>
            <img src={arrow} alt="" />
          </div>

          <span>
            {" "}
            <img src={check} alt="" />
            Done
          </span>
        </div>
        <div className="content-format__content__snippet">
          <div>
            <p>Choose Audience </p>
            <img src={arrow} alt="" />
          </div>

          <span>
            {" "}
            <img src={check} alt="" />
            Done
          </span>
        </div>
        <div className="content-format__content__snippet">
          <div>
            <p id="budget-dates"> Choose Budget & Dates</p>
            <img src={arrow} alt="" />
          </div>

          <span>
            {" "}
            <img src={check} alt="" />
            Done
          </span>
        </div>
        <div className="content-format__content__snippet">
          <div>
            <p>Generate Ad Media</p>
            <img src={arrow} alt="" />
          </div>

          <span className="last-span">Process</span>
        </div>
      </div>
    </div>
  );
}

export default AddFormat;
