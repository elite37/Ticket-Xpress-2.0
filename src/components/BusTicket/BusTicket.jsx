import React from "react";
import { Link } from "react-router-dom";
import Styles from "./BusTicket.Module.css";

function BusTicket() {
  return (
    <div className={Styles.flightbooking}>
      <div className={Styles.flightbooking__container}>
        <div className={Styles.flightbooking__top}>
          <div className={Styles.flight__option}>
            <Link to="/flight">
              <span>Book Flight</span>
              <div className="./flightbooking.html">
                <i className="fas fa-plane"></i>
              </div>
            </Link>
          </div>
          <div className={`${Styles.flight__option} ${Styles.active}`}>
            <Link to="/bus">
              <span>Book Bus</span>
              <div className="#">
                <i className="fas fa-bus"></i>
              </div>
            </Link>
          </div>
          <div className={Styles.flight__option}>
            <Link to="/train">
              <span>Book Train</span>
              <div className="#">
                <i className="fas fa-train"></i>
              </div>
            </Link>
          </div>
        </div>

        <div className={Styles.flightbooking__bottom}>
          <div className={Styles.flighttypes}>
            <div className={Styles.filghttype}>
              <Link href="/">
                Round Trip
                <div className="">
                  <i className="fas fa-sort-down"></i>
                </div>
              </Link>
            </div>
            <div className={Styles.filghttype}>
              <a href="/">
                1 Passenger
                <div className="">
                  <i className="fas fa-sort-down"></i>
                </div>
              </a>
            </div>

            <div className={Styles.filghttype}>
              <a href="/">
                Economy
                <div className="">
                  <i className="fas fa-sort-down"></i>
                </div>
              </a>
            </div>
          </div>

          <form action="" className={Styles.flightform}>
            <div className={Styles.flightform__conn}>
              <div className={Styles.flightform__from}>
                <div className="">
                  <label for="">From where ?</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="City Or Terminal"
                  />
                </div>

                <div className="">
                  <label for="">To where ?</label>
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="City Or Terminal"
                  />
                </div>
              </div>

              <div className={Styles.flightform__date}>
                <div className="">
                  <label for="">Leaving On</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="City Or Airport"
                  />
                </div>

                <div className="">
                  <label for="">Returning On</label>
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="City Or Airport"
                  />
                </div>
              </div>
            </div>

            <div className={Styles.submitdiv}>
              <input
                type="submit"
                value="Let's Go"
                className={Styles.flightsubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BusTicket;
