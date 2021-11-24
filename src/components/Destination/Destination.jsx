import { FilterListOutlined, LocationOnOutlined } from "@mui/icons-material";
import React from "react";
import Obudu from "../../assets/images/userDashBoard/obudu.jpg";
import Plane from "../../assets/images/userDashBoard/plane.png";
import "./Destination.css";

const Destination = () => {
  return (
    <>
      <div className="destContainer">
        <div className="destWrapper">
          <div className="destHeading">
            <h2>Best Destination</h2>
            <span className="filter">
              <FilterListOutlined />
              <h4>Filter</h4>
            </span>
          </div>
          <div className="dest">
            <div className="destImg">
              <img src={Obudu} alt="" />
            </div>
            <div className="destDetails">
              <span className="destLocation">
                <h3>Obudu Cattle Ranch</h3>
              </span>
              <span className="destState">
                <LocationOnOutlined />
                <h6>Cross River</h6>
              </span>
            </div>
            <div className="destFlight">
              <div className="flightImg">
                <img src={Plane} alt="" />
              </div>
              <span className="destPrice">
                <h4>#34K</h4>
              </span>
            </div>
          </div>
          <div className="dest">
            <div className="destImg">
              <img src={Obudu} alt="" />
            </div>
            <div className="destDetails">
              <span className="destLocation">
                <h3>Obudu Cattle Ranch</h3>
              </span>
              <span className="destState">
                <LocationOnOutlined />
                <h6>Cross River</h6>
              </span>
            </div>
            <div className="destFlight">
              <div className="flightImg">
                <img src={Plane} alt="" />
              </div>
              <span className="destPrice">
                <h4>#34k</h4>
              </span>
            </div>
          </div>
          <div className="dest">
            <div className="destImg">
              <img src={Obudu} alt="" />
            </div>
            <div className="destDetails">
              <span className="destLocation">
                <h3>Obudu Cattle Ranch</h3>
              </span>
              <span className="destState">
                <LocationOnOutlined />
                <h6>Cross River</h6>
              </span>
            </div>
            <div className="destFlight">
              <div className="flightImg">
                <img src={Plane} alt="" />
              </div>
              <span className="destPrice">
                <h4>#34k</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
