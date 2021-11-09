import React from "react";
import TicketExpressLogo from "../../assets/images/logo.png";
import TabLink from "../TabLink/TabLink";
import "./DashboardSidebar.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import LogoutIcon from "@mui/icons-material/Logout";

function DashboardSidebar() {
  return (
    <div className='sidebar'>
      <div className='logo-container'>
        <img src={TicketExpressLogo} alt='Ticket Express' />
      </div>
      <ul className='dashboard__tab'>
        <TabLink name='Overview' active Icon={HomeIcon} route='/dashboard' />
        <TabLink
          name='Add Booking'
          Icon={AddCircleOutlineIcon}
          route='/dashboard/addbooking'
        />
        <TabLink
          name='Settings'
          Icon={SettingsIcon}
          route='/dashboard/settings'
        />
      </ul>

      <ul className='logout'>
        <TabLink name='Logout' Icon={LogoutIcon} />
      </ul>
    </div>
  );
}

export default DashboardSidebar;
