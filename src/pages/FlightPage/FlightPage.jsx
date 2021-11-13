import React from "react";
import FlightTicket from "../../components/FlightTicket";
import Services from "../../components/Services";
import "./FlightPage.css";
function FlightPage() {
  return (
    <div>
      <FlightTicket />
      <Services />
    </div>
  );
}

export default FlightPage;
