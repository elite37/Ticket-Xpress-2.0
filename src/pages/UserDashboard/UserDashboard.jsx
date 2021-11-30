import React from "react";
import "./userdashboard.css";
import CalendarComp from "../../components/Calendar/CalendarComp";
import UserSideBar from "../../components/UserSideBar";
import DashNav from "../../components/DashNav";
import ProfileNameEdit from "../../components/ProfileNameEdit";
import MySchedule from "../../components/MySchedule/MySchedule";
import PlacesAds from "../../components/PlacesAds/PlacesAds";
import Destination from "../../components/Destination/Destination";
import PlanTrip from "../../components/PlanTrip/PlanTrip";

const UserDashboard = ({ user }) => {
  return (
    <>
      <div className='container'>
        <div className='dashboardLeft'>
          <UserSideBar
            userDashboard='Dashboard'
            tickets='My Tickets'
            transaction='Transaction'
            agent='Agent'
            settings='Settings'
          />
        </div>
        <div className='dashboardCenter'>
          <div className='navWrapper'>
            <h1>
              Welcome <span>{user.firstname}</span>
            </h1>
            <DashNav />
          </div>
          <div className='userDasboardContent'>
            <PlacesAds />
          </div>
          <div className='destinationWrapper'>
            <Destination />
            <PlanTrip />
          </div>
        </div>
        <div className='dashboardRight'>
          <div className='dashboardRightWrapper'>
            <ProfileNameEdit user={user} />
            <CalendarComp className='calenderComp' />
            <h2>My Schedule</h2>
            <MySchedule />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
