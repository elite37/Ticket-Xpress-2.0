import { useDispatch } from "react-redux";
import { flightClass } from "../flightStoreSlice";
import styles from './.module.css'

export default function FlightClass({ code, name, text }) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.entry}`}>
      <input
        type="radio"
        onChange={() => dispatch(flightClass({ value: code }))}
        id={code}
        name={name}
        value={code}
      />
      <label htmlFor={code}>{text}</label>
    </div>
  );
}
