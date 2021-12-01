import s from "./.module.css";
import { useSelector, useDispatch } from "react-redux";
import { passengers } from "../../../../state/slices/flight";

export default ({ type }) => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.flight.passengers[type.code]);

  return (
    <div className={`${s.entry}`}>
      <input
        size="2"
        className={`${s.numInput}`}
        type="number"
        onInput={(e) => {
          dispatch(passengers({ attr: type.code, value: e.target.value }));
        }}
      />
      <p>{!count || count > 1 ? type.pluralText : type.text}</p>
    </div>
  );
};
