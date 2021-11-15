import React from 'react';
import Clock from "../../assets/images/Notificationbar/clock.png";
import "./NotificationBar.css";

function NotificationBar() {
  return (
    <div>
    <div className="notification">
      <img src={Clock} alt="Clock" className="clock" />
      <p className="notification_text">Nice Job! you picked one of the best value flight. <strong>Book now, it only takes a few minutes.</strong></p>
    </div>
      <div className="notification-_header">
        <p>Customize your trip</p>
    </div>
    </div>
  );
}

export default NotificationBar;