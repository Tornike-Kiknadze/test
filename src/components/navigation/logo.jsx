import React from "react";
import "../../App.css";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import logo from "./ninja.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Logo() {
  const classes = useStyles();

  return (
    <div className="nav-logo">
      <Avatar alt="Remy Sharp" src={logo} />
      <p>DataNinja</p>
    </div>
  );
}
