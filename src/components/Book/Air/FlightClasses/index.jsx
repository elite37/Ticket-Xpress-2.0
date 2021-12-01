import FlightClass from "./FlightClass";
import flightClasses from "./flightClasses.json";
import CaretLabel from "$ui/CaretLabel";
import s from "./.module.css";
import { useState } from "react";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <form>
      {/* <fieldset> */}
      <CaretLabel
        onClick={() => setOpen((o) => !o)}
        label={() => <legend>Flight Class</legend>}
      />
      <div className={`${s.all} ${open ? s.open : ""}`}>
        {flightClasses.map((flightClass) => (
          <FlightClass
            key={flightClass.code}
            name="flightClass"
            code={flightClass.code}
            text={flightClass.text}
          />
        ))}
      </div>
      {/* </fieldset> */}
    </form>
  );
};
