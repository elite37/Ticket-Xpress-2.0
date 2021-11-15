import React from "react";
import TicketExpressLogo from "../../assets/images/logo.png";
import TabLink from "../TabLink/TabLink";
import "./UserSideBar.css";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { AccountBalanceWalletOutlined, ConfirmationNumberOutlined, SupportAgentOutlined } from "@mui/icons-material";

function DashboardSidebar(props) {
  const { userDashboard, tickets, transaction, agent, settings } = props;
  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src={TicketExpressLogo} alt="Ticket Express" />
      </div>
      <ul className="dashboard__tab">
        <TabLink
          name={userDashboard}
          active
          Icon={HomeIcon}
          route="/userdashboard"
        />
        <TabLink
          name={tickets}
          Icon={ConfirmationNumberOutlined}
          route="/dashboard/addbooking"
        />
        <TabLink
          name={transaction}
          Icon={AccountBalanceWalletOutlined}
          route="/dashboard/settings"
        />
        <TabLink name={agent} Icon={SupportAgentOutlined} route="/dashboard/settings" />
        <TabLink
          name={settings}
          Icon={SettingsIcon}
          route="/dashboard/settings"
        />
      </ul>

      <ul className="logout">
        <TabLink name="Logout" Icon={LogoutIcon} />
      </ul>
    </div>
  );
}

export default DashboardSidebar;
