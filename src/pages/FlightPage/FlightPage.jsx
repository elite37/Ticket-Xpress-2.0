import React, {useState} from "react";
import FlightTicket from "../../components/FlightTicket";
import Services from "../../components/Services";
import "./FlightPage.css";
function FlightPage() {
  let [depDate, setDepDate] = useState('')
  let [origin, setOrigin] = useState('')
  let [destination, setDestination] = useState('')

  return (
    <div>
      <FlightTicket
        setDepDate={setDepDate}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      <Services />
    </div>
  );
}

export default FlightPage;
