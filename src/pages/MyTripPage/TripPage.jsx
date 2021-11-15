import React from "react";
import MyTrip from "../../components/MyTrip";
import MytripStyles from "./TripPage.module.css";
// import "./TripPage.modulecss";

function TripPage() {
  return (
    <main>
      <div className={MytripStyles.Trip_page}>
        <h1 className={MytripStyles.text}>Essential Add-On</h1>
        <hr />
        <div className={MytripStyles.trip_container}>
          <MyTrip />
        </div>
        <div>
          <button className={MytripStyles.Bookingbtn}>Continue Booking</button>
        </div>
      </div>
    </main>
  );
}

export default TripPage;
