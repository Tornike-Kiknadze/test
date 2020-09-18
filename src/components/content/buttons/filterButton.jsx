import React from "react";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { green, purple } from "@material-ui/core/colors";
import filter from "./filter.png";
import Chip from "@material-ui/core/Chip";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",

    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#2c7df0",
    borderColor: "#0063cc",

    "&:hover": {
      backgroundColor: "#2c7df0",
      borderColor: "#0062cc",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#2c7df0",
      borderColor: "#005cbf",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
    },
  },
})(Button);

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: "#2c7df0",
    borderRadius: "100px",
    fontSize: "12px",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#2c7df0",
    },
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function FilterButton() {
  const classes = useStyles();

  return (
    <div>
      <ColorButton variant="contained" color="primary" className={classes.root}>
        <img src={filter} alt="filter-button" /> Filter
      </ColorButton>
    </div>
  );
}
