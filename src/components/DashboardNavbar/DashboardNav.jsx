import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import UserAvatar from "../../assets/images/person.jpg";
// import "./DashboardNav.css";
import Styles from "./DashboardNav.Module.css";

function DashboardNav() {
  return (
    <div className={Styles.dashboardNav}>
      <div className={Styles.nav__left}>
        <CalendarTodayIcon className={Styles.nav__calendar} />
        <p>September 10, 2025</p>
      </div>
      <div className={Styles.nav__right}>
        <form method="post">
          <div className={Styles.form__group}>
            <input
              type="text"
              name="search-bar"
              placeholder="Search For Something"
            />

            <button type='submit'>
              <SearchIcon fontSize='small' />

            </button>
          </div>
        </form>
        <div className={Styles.notifications}>
          <NotificationsNoneIcon className={Styles.nav__notifications} />
        </div>
        <div className={Styles.user}>
          <Avatar src={UserAvatar} alt="User" />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
