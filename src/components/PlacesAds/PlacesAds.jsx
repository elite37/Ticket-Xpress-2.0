import React from "react";
import ABJ from "../../assets/images/userDashBoard/abj.jpg";
import "./PlacesAds.css"

const PlacesAds = () => {
  return (
    <>
      <div className="placeContainer">
        <div className="placesWrapper">
          <div className="places">
            <div className="placeImg">
              <img src={ABJ} alt="" />
            </div>
            <h5>Abuja</h5>
          </div>
          <div className="places">
            <div className="placeImg">
              <img src={ABJ} alt="" />
            </div>
            <h5>Abuja</h5>
          </div>
          <div className="places">
            <div className="placeImg">
              <img src={ABJ} alt="" />
            </div>
            <h5>Abuja</h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacesAds;
