import React from "react";
import "./MySchedule.css";
import LCC from "../../assets/images/userDashBoard/LCC.jpg";

const MySchedule = () => {
  return (
    <>
      <div className="scheduleCcontainer">
        <div className="scheduleWrapper">
          <div className="schedule">
            <div className="scheduleImg">
              <img src={LCC} alt="Lekki conservative center" />
            </div>
            <div className="scheduleDetails">
              <h3>Lekki Conservative Center</h3>
              <h2>9/09/2021 - 23/09/2021</h2>
            </div>
          </div>
          <div className="schedule">
            <div className="scheduleImg">
              <img src={LCC} alt="Lekki conservative center" />
            </div>
            <div className="scheduleDetails">
              <h3>Lekki Conservative Center</h3>
              <h2>9/09/2021 - 23/09/2021</h2>
            </div>
          </div>
          <div className="schedule">
            <div className="scheduleImg">
              <img src={LCC} alt="Lekki conservative center" />
            </div>
            <div className="scheduleDetails">
              <h3>Lekki Conservative Center</h3>
              <h2>9/09/2021 - 23/09/2021</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MySchedule;
