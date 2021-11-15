import React from "react";
import MyTrip from "../../components/MyTrip";
import NotificationBar from "../../components/NotificationBar";
import "./TripPage.css";

function TripPage() {
  return (
    <main>
    <NotificationBar />
      <div className="Trip_page">
        <h1 className="text">Essential Add-On</h1>
        <hr />
        <div className="trip_container">
          <MyTrip />
        </div>
        <div>
          <button className="Bookingbtn">Continue Booking</button>
        </div>
      </div>
    </main>
  );
}

export default TripPage;
