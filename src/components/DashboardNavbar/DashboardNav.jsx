import React from "react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import UserAvatar from "../../assets/images/person.jpg";
import "./DashboardNav.css";

function DashboardNav() {
  return (
    <div className='dashboardNav'>
      <div className='nav__left'>
        <CalendarTodayIcon className='nav__calendar' />
        <p>September 10, 2025</p>
      </div>
      <div className='nav__right'>
        <form method='post'>
          <div className='form__group'>
            <input
              type='text'
              name='search-bar'
              placeholder='Search For Something'
            />
            <button type='submit'>
              {" "}
              <SearchIcon fontSize='small' />{" "}
            </button>
          </div>
        </form>
        <div className='notifications'>
          <NotificationsNoneIcon className='nav__notifications' />
        </div>
        <div className='user'>
          <Avatar src={UserAvatar} alt='User' />
        </div>
      </div>
    </div>
  );
}

export default DashboardNav;
