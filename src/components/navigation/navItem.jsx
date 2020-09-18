import React from "react";
import "../../App.css";

export default function NavItem({ img = "", text }) {
  return (
    <div className="nav-item">
      <img src={img} alt="" />
      <div className="nav-item__text">
        <p>{text}</p>{" "}
      </div>
    </div>
  );
}
