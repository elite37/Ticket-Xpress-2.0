import React from "react";
import TicketExpressLogo from "../../assets/images/logo.png";
import TabLink from "../TabLink/TabLink";
// import "./DashboardSidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import Styles from "./DashboardSidebar.Module.css";

function DashboardSidebar() {
  return (
    <div className={Styles.sidebar}>
      <div className={Styles.logo__container}>
        <img src={TicketExpressLogo} alt='Ticket Express' />
      </div>
      <ul className={Styles.dashboard__tab}>
        <TabLink name='Overview' active Icon={HomeIcon} route='/dashboard' />
        <TabLink
          name='Add Available Bus'
          Icon={AddCircleOutlineIcon}
          route='/dashboard/addbus'
        />
        <TabLink
          name='Settings'
          Icon={SettingsIcon}
          route='/dashboard/settings'
        />
      </ul>

      <ul className={Styles.logout}>
        <TabLink name='Logout' route='/dashboard' Icon={LogoutIcon} logoutbtn />
      </ul>
    </div>
  );
}

export default DashboardSidebar;
