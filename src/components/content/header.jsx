import React from "react";
import "../../App.css";
import SimpleSelect from "./select";
import search from "./assets/search.png";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import logo from "./assets/user.png";
import arrow from "./assets/down-arrow.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function Header() {
  return (
    <div className="content-header">
      <div className="content-header__1row">
        <div className="content-header__logo">
          <div className="logo-wrapper"></div>
          <SimpleSelect />
        </div>
        <div className="content-header__create-web">
          <p>Create Website</p>{" "}
        </div>
      </div>
      <div className="content-header__2row">
        <div className="content-header__create-add">
          <p>+ Create Ad</p>{" "}
        </div>
        <div className="content-header__search">
          <img src={search} alt="" />
        </div>
        <div className="content-header__user">
          <Avatar alt="Remy Sharp" src={logo} />
          <img src={arrow} alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;
