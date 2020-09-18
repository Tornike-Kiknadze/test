import React from "react";
import "../../App.css";
import SimpleAccordion from "./accordion";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import ninja from "./assets/ninja.png";
import DoneIcon from "@material-ui/icons/Done";
import FaceIcon from "@material-ui/icons/Face";
import AddFormat from "./addFormat";
import Recommendation from "./recommendation";
import PreviewButton from "./previewButton";
import DraftButton from "./saveAsDraft";

function Main() {
  return (
    <div className="content-main">
      <div className="content-main__firstColumn">
        <div className="content-main__firstColumn__mode">
          <div>
            <Chip
              avatar={<img alt="calendar" src={ninja} className="calendar" />}
              label="All"
              deleteIcon={<DoneIcon />}
              clickable={true}
              variant="outlined"
              alt="orange"
              icon={<FaceIcon />}
            />
            <Chip
              avatar={<Avatar src={facebook} />}
              label="Facebook"
              variant="outlined"
              clickable
            />
            <Chip
              avatar={<Avatar src={google} />}
              label="Google"
              variant="outlined"
              clickable
            />{" "}
          </div>{" "}
        </div>
        <SimpleAccordion />
      </div>
      <div className="content-main__secondColumn">
        <AddFormat />
        <Recommendation />

        <PreviewButton />
        <DraftButton />
      </div>
    </div>
  );
}

export default Main;
