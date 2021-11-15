import React from 'react'
import useTitle from "../../hooks/useTItle/useTitle";
import NotificationBar from '../../components/NotificationBar';
import "./CustomerInformation.css"


function CustomerInformation() {
  useTitle("Additional Information");
  
  return (
    <main>
      <NotificationBar />
      <div className="info">
        <div className="flight_itinerary"> I am here</div>
        <div className= "customer_information"> I am here</div>
        <div className="confirmation"> I am here</div>
      </div>
    </main>
  );
}

export default CustomerInformation;