import FlightClass from "./FlightClass";
import flightClasses from "./flightClasses.json";
import CaretLabel from "../../UI/CaretLabel";
import styles from "./.module.css";
import { useState } from "react";

export default function FlightClasses() {
  const [open, setOpen] = useState(false)
  return (
    <form>
      {/* <fieldset> */}
      <CaretLabel
        onClick={() => setOpen(o=>!o)}
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
