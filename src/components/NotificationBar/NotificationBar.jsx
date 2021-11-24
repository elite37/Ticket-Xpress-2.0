import React from 'react';
import "./NotificationBar.css";

function NotificationBar() {
  return (
    <div>
      <div className="notification">
        <i className="far fa-3x fa-clock"></i>
        <p className="notification_text">
          Nice Job! you picked one of the best value flight.{" "}
          <strong>Book now, it only takes a few minutes.</strong>
        </p>
      </div>
      <div className="notification-_header">
        <p>Customize your trip</p>
      </div>
    </div>
  );
}

export default NotificationBar;