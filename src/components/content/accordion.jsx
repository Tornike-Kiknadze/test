import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import arrow from "./assets/down-arrow.png";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <div className="accordion-text">
              {" "}
              <p> 01 Step </p> <p>Create Campaign</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            <div className="accordion-text">
              {" "}
              <p> 02 Step </p> <p>Choose Audience</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            <div className="accordion-text">
              {" "}
              <p> 03 Step</p> <p>Choose Budget & Dates</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <div className="accordion-text__budget__wrapper">
            <div className="accordion-text__budget">
              <div>
                <p>Period</p>
                <p>09/12/2019 - 08/11/2020</p>
              </div>
              <div className="facebook-google__wrapper">
                <img src={facebook} alt="" />
                <img src={google} alt="" />{" "}
              </div>
            </div>
            <div className="accordion-text__budget">
              <div>
                <p>Choose budget</p>
                <p>400.00 $</p>
              </div>
              <div className="budget-div">
                <p>$ Dollar </p>
                <img src={arrow} alt="" />
              </div>
              <div className="facebook-google__wrapper">
                <img src={facebook} alt="" />
                <img src={google} alt="" />{" "}
              </div>
            </div>
            <div className="accordion-text__budget">
              <div>
                <p>Choose When You Are charged</p>
                <p>On Impression</p>
              </div>

              <div className="facebook-google__wrapper">
                <img src={facebook} alt="" />
                <img src={google} alt="" />{" "}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            {" "}
            <div className="accordion-text">
              {" "}
              <p> 04 Step </p> <p> Generate Ad Media</p>
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
