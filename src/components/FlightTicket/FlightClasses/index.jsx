import FlightClass from "./FlightClass";
import flightClasses from "./flightClasses.json";
import { useSelector, useDispatch } from "react-redux";
import { flightClassesOpen } from "../flightStoreSlice";
import CaretLabel from "../../UI/CaretLabel";

export default function FlightClasses() {
  const dispatch = useDispatch();
  const flightState = useSelector((state) => state.flight);
  return (
    <form>
      {/* <fieldset> */}
      <CaretLabel
        onClick={() => dispatch(flightClassesOpen())}
        label={() => <legend>Flight Class</legend>}
      />
      {flightState.flightClassesOpen && (
        <div>
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
