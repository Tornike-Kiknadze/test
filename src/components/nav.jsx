import React from "react";
import "../App.css";
import Logo from "./navigation/logo";
import NavItem from "./navigation/navItem";
import dash from "./navigation/assets/dashboard/dashboard.png";
import builder from "./navigation/assets/builder/worker.png";
import sales from "./navigation/assets/sales/speed.png";
import ad from "./navigation/assets/Ad/megaphone.png";
import aud from "./navigation/assets/audiences/user.png";
import conversions from "./navigation/assets/conversions/repeat.png";
import report from "./navigation/assets/reporting/pie-chart.png";
import crm from "./navigation/assets/crm/crm.png";
import sender from "./navigation/assets/sender/send.png";
import flow from "./navigation/assets/flow/flow.png";
import rule from "./navigation/assets/rule/rules.png";
import user from "./navigation/assets/user.jpg";
import Avatar from "@material-ui/core/Avatar";
import left from "./navigation/assets/chevron-left.png";

function Nav() {
  return (
    <nav className="nav">
      <Logo />

      <div className="nav-items">
        <NavItem text="Dashboard" img={dash} />
        <NavItem text="Website Builder" img={builder} />
        <NavItem text="Sales" img={sales} />
        <NavItem text="Ad Creation" img={ad} />
        <NavItem text="Audiences" img={aud} />
        <NavItem text="Conversions" img={conversions} />
        <NavItem text="Reporting" img={report} />
        <NavItem text="CRM" img={crm} />
        <NavItem text="Manual Sender" img={sender} />
        <NavItem text="Flow Builder" img={flow} />
        <NavItem text="Rule Builder" img={rule} />
      </div>
      <div className="nav-minimize">
        <div className="nav-minimize__1">
          <img src={left} alt="" />
          <p> Minimize Menu</p>{" "}
        </div>
        <div className="nav-minimize__2">
          {" "}
          <Avatar alt="Remy Sharp" src={user} />{" "}
          <div className="nav-minimize__2__text">
            <p>Your Manager</p>
            <p>Ninutsa</p>
            <p>Message Now </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
