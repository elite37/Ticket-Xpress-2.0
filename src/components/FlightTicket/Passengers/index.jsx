import { useState } from "react";
import Passenger from "./Passenger";
import passengerTypes from "./passengerTypes.json";
import styles from "./.module.css";
import CaretLabel from "../../UI/CaretLabel";

export default function Passengers() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CaretLabel onClick={() => setOpen((o) => !o)} label={() => <p>Number of Passengers</p>} />
      {open && (
        <div className={`${styles.all}`}>
          {passengerTypes.map((passengerType) => (
            <Passenger key={passengerType.code} type={passengerType} />
          ))}
        </div>
      )}
    </>
  );
}
