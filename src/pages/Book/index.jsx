import s from "./.module.css";
import { mode } from "$state/slices/book"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import Air from "$comp/Book/Air";

const modes = [
  {
    key: 1,
    name: "Air",
    icon: null,
  },
  {
    key: 2,
    name: "Bus",
    icon: null,
  },
  {
    key: 3,
    name: "Train",
    icon: null,
  },
];

export default () => {
  const _mode = useSelector(state => state.book.mode)
  const dispatch = useDispatch()
  
  return (
    <div className={`${s.flightbooking}`}>
      <div className={`${s.flightbooking__container}`}>
        <div className={`${s.flightbooking__top}`}>
          {modes.map((tabMode) => (
            <div
              key={tabMode.key}
              onClick={() => dispatch(mode(tabMode.name))}
              className={`${s.flight__option} ${
                _mode === tabMode.name ? s.active : ""
              }`}
            >
              <span>{tabMode.name}</span>
              {tabMode.icon}
            </div>
          ))}
        </div>
        <div className={`${s.flightbooking__bottom}`}>
          <Air />
        </div>
      </div>
    </div>
  );
};
