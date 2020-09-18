import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import logo from "./assets/user.png";
import calendar from "./assets/calendar/calendar.png";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function OutlinedChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div className={classes.root}>
      <Chip
        avatar={<img alt="calendar" src={calendar} className="calendar" />}
        label="11 Dec - 15 Dec"
        variant="outlined"
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar src={facebook} />}
        label="Facebook"
        variant="outlined"
        onClick={handleClick}
      />
      <Chip
        avatar={<Avatar src={google} />}
        label="Google"
        variant="outlined"
        onClick={handleClick}
      />
    </div>
  );
}
