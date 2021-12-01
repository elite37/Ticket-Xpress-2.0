import { useDispatch } from "react-redux";
import { flightClass } from "$state/slices/flight";
import s from './.module.css'

export default ({ code, name, text }) => {
  const dispatch = useDispatch();

  return (
    <div className={`${s.entry}`}>
      <input
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
