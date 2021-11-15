import React, { useState } from "react";
import "./userdashboard.css";
import CalendarComp from "../../components/Calendar/CalendarComp";
import UserSideBar from "../../components/UserSideBar";
import DashNav from "../../components/DashNav";
import ProfileNameEdit from "../../components/ProfileNameEdit";
import MySchedule from "../../components/MySchedule/MySchedule";

const UserDashboard = () => {
  const [userName, setUserName] = useState("Abayomi");

  return (
    <>
      <div className="container">
        <div className="dashboardSide">
          <UserSideBar
            userDashboard="Dashboard"
            tickets="My Tickets"
            transaction="Transaction"
            agent="Agent"
            settings="Settings"
          />
        </div>
        <div className="dashboardNav">
          <h1>
            Welcome <span>{userName}</span>
          </h1>
          <DashNav />
        </div>
        <div className="dashboardRight">
          <div className="dashboardRightWrapper">
            <ProfileNameEdit />
            <CalendarComp className="calenderComp" />
            <h2>My Schedule</h2>
            <MySchedule />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
