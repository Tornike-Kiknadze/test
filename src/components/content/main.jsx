import React from "react";
import "../../App.css";
import SimpleAccordion from "./accordion";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import facebook from "./assets/facebook.png";
import google from "./assets/google.png";
import ninja from "./assets/ninja.png";
import tick from "./assets/tick.svg";
import lightning from "./assets/lightning.png";
import AddFormat from "./addFormat";
import Recommendation from "./recommendation";
import PreviewButton from "./previewButton";
import DraftButton from "./saveAsDraft";

function Main() {
  return (
    <div className="content-main">
      <div className="content-main__firstColumn">
        <div className="content-main__firstColumn__mode">
          <div className="content-main__firstColumn__mode__icons__wrapper">
            <div className="content-main__firstColumn__mode__icons">
              <div className="ninja-avatar">
                <img src={ninja} alt="" />
                <p>All </p>
                <img src={tick} alt="" />
              </div>
              <Chip
                avatar={<Avatar src={facebook} />}
                label="Facebook"
                variant="outlined"
                alt="facebook"
                clickable
              />
              <Chip
                avatar={<Avatar src={google} />}
                label="Google"
                variant="outlined"
                alt="google"
                clickable
              />{" "}
            </div>{" "}
            <div>
              <select className="easy-mode-select">
                <option selected disabled>
                  &#x1F5F2; Easy Mode
                </option>
              </select>
            </div>
          </div>
          <div className="boost-tooltip">
            <p>
              You can boost ad on two platform, also Facebook & Google and other
              products
            </p>
          </div>
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
