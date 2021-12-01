import { useState } from "react";
import Passenger from "./Passenger";
import passengerTypes from "./passengerTypes.json";
import s from "./.module.css";
import CaretLabel from "$ui/CaretLabel";

export default () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <CaretLabel
        onClick={() => setOpen((o) => !o)}
        label={() => <p>Number of Passengers</p>}
      />
      {open && (
        <div className={`${s.all}`}>
          {passengerTypes.map((passengerType) => (
            <Passenger key={passengerType.code} type={passengerType} />
          ))}
        </div>
      )}
    </>
  );
};
