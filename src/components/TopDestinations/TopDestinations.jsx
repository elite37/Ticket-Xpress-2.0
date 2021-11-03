import React from "react";
import "./TopDestinations.css";
import abujaIcon from "../../assets/images/abuja.png";
import travelIcon from "../../assets/images/dest.svg";
import yolaIcon from "../../assets/images/yola.png";
import akwaIbomIcon from "../../assets/images/akwa-ibom.png";
import Destination from "../Destination/Destination";

function TopDestinations() {
  return (
    <section>
      <div className='container'>
        <div className='top-destination'>
          <h1 className='heading'>Top Destinations</h1>
          <div className='destinations'>
            <Destination
              location='Jabi, Abuja'
              price='#29, 900'
              time='1 hour'
              destinationImage={abujaIcon}
              travelIcon={travelIcon}
              destinationImageAlt='abuja'
            />
            <Destination
              location='Yola, Adamawa'
              price='#34, 200'
              time='1hr 50mins'
              destinationImage={yolaIcon}
              travelIcon={travelIcon}
              destinationImageAlt='Yola'
            />
            <Destination
              location='Akwa Ibom, Uyo'
              price='#25k'
              time='1 hour'
              destinationImage={akwaIbomIcon}
              travelIcon={travelIcon}
              destinationImageAlt='akwa-ibom'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopDestinations;
