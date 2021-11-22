import { Link } from "react-router-dom";
import Date from "./Date";
import {
  useSelector,
  useDispatch,
} from "react-redux";
import {
  roundTrip,
  origin,
  destination,
  depDate,
  retDate,
} from "./flightStoreSlice";
import styles from "./.module.css";
import Location from "./Location";
import Passengers from "./Passengers";
import FlightClasses from "./FlightClasses";

export default function _(
  props
) {
  const flightState =
    useSelector(
      (
        state
      ) =>
        state.flight
    );
  const dispatch =
    useDispatch();

  return (
    <div
      className={`${styles.flightbooking}`}
    >
      <div
        className={`${styles.flightbooking__container}`}
      >
        <div
          className={`${styles.flightbooking__top}`}
        >
          <div
            className={`${styles.flight__option} ${styles.active}`}
          >
            <Link to="/flight">
              {" "}
              <span>
                Book
                Flight
              </span>
              <div className="">
                <i
                  className={`${styles.fas} ${styles.faPlane}`}
                ></i>
              </div>
            </Link>
          </div>
          <div
            className={`${styles.flight__option}`}
          >
            <Link to="/bus">
              {" "}
              <span>
                Book
                Bus
              </span>
              <div className="">
                {" "}
                <i
                  className={`${styles.fas} ${styles.faBus}`}
                ></i>
              </div>
            </Link>
          </div>
          <div
            className={`${styles.flight__option}`}
          >
            <Link to="/train">
              {" "}
              <span>
                Book
                Train
              </span>
              <div className="">
                <i
                  className={`${styles.fas} ${styles.faTrain}`}
                ></i>
              </div>
            </Link>
          </div>
        </div>

        <div
          className={`${styles.flightbooking__bottom}`}
        >
          <div
            className={`${styles.flighttypes}`}
          >
            <div
              className={`${styles.flighttype}`}
            >
              <input
                className={`${styles.optionCheckbox}`}
                onChange={() =>
                  dispatch(
                    roundTrip()
                  )
                }
                type="checkbox"
              />
              Round
              Trip
            </div>
          </div>

          <div
            style={{
              display:
                "flex",
              flexDirection:
                "column",
              rowGap:
                ".3rem",
            }}
          >
            <FlightClasses />
            <Passengers />
          </div>

          <div
            action=""
            className={`${styles.flightform}`}
          >
            <div
              className={`${styles.flightform__conn}`}
            >
              <Location
                type="text"
                id="origin"
                label="Departure City"
                onSelect={
                  origin
                }
              />

              <Location
                type="text"
                label="Arrival City"
                id="destination"
                onSelect={
                  destination
                }
              />

              <Date
                label="Leaving on"
                onChange={
                  depDate
                }
              />

              {flightState.roundTrip && (
                <Date
                  label="Returning on"
                  onChange={
                    retDate
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
