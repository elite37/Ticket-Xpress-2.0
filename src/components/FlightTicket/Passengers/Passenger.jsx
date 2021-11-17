import styles from "./.module.css";
import { useSelector, useDispatch } from "react-redux";
import { passengers } from "../flightStoreSlice";

export default function Passenger({ type }) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.flight.passengers[type.code]);

  return (
    <div className={`${styles.entry}`}>
      <input
        size="2"
        className={`${styles.numInput}`}
        type="number"
        onInput={(e) => {
          dispatch(passengers({ attr: type.code, value: e.target.value }));
        }}
      />
      <p>{!count || count > 1 ? type.pluralText : type.text}</p>
    </div>
  );
}
