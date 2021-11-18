import FlightClass from "./FlightClass";
import flightClasses from "./flightClasses.json";
import { useState } from "react";
import CaretLabel from "../../UI/CaretLabel";
import styles from "./.module.css";

export default function _() {
  const [open, setOpen] = useState(false)
  return (
    <form>
      {/* <fieldset> */}
      <CaretLabel
        onClick={() => setOpen(s => !s)}
        label={() => <legend>Flight Class</legend>}
      />
      {open && (
        <div className={`${styles.all}`}>
          {flightClasses.map((flightClass) => (
            <FlightClass
              key={flightClass.code}
              name="flightClass"
              code={flightClass.code}
              text={flightClass.text}
            />
          ))}
        </div>
      )}
      {/* </fieldset> */}
    </form>
  );
}
