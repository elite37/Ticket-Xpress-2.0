import { useDispatch } from "react-redux";
import { flightClass } from "../flightStoreSlice";
import styles from './.module.css'
import uiStyles from '@ui/.module.css'

export default function FlightClass({ code, name, text }) {
  const dispatch = useDispatch();

  return (
    <div className={`${styles.entry}`}>
      <input
        className={`${uiStyles.radio}`}
        type="radio"
        onChange={() => dispatch(flightClass(code))}
        id={code}
        name={name}
        value={code}
      />
      <label htmlFor={code}>{text}</label>
    </div>
  );
}
