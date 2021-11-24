import React from "react";
import "./PlanTrip.css";
import Customize from "../../assets/images//userDashBoard/customization.png";

const PlanTrip = () => {
  return (
    <>
      <div className="tripContainer">
        <div className="tripWrapper">
          <div className="trip">
            <div className="tripImg">
              <img src={Customize} alt="" />
            </div>
            <span className="planWithUs">
              <h3>Plan Your Trip With Us</h3>
            </span>
            <h4>Get Special Offers!!!</h4>
            <span className="offer">
              <h3>Begin Now!</h3>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanTrip;
