import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Styles from "./FlightTicket.Module.css";

function FlightTicket() {
  return (
    <div className={Styles.flightbooking}>
      <div className={Styles.lightbooking__container}>
        <div className={Styles.flightbooking__top}>
          <div className={`${Styles.flight__option} ${Styles.active}`}>
            <Link to="/flight">
              {" "}
              <span>Book Flight</span>
              <div className="">
                <i className="fas fa-plane"></i>
              </div>
            </Link>
          </div>
          <div className={Styles.flight__option}>
            <Link to="/bus">
              {" "}
              <span>Book Bus</span>
              <div className="">
                {" "}
                <i className="fas fa-bus"></i>
              </div>
            </Link>
          </div>
          <div className={Styles.flight__option}>
            <Link to="/train">
              {" "}
              <span>Book Train</span>
              <div className="">
                <i className="fas fa-train"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className={Styles.flightbooking__bottom}>
          <div className={Styles.flighttypes}>
            <div className={Styles.filghttype}>
              <a href="/">
                Round Trip
                <div className="">
                  <i className="fas fa-sort-down"></i>
                </div>
              </a>
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
<<<<<<< HEAD
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                    onChange={(e)=>{setOrigin(e.target.value)}}
=======
                    type="text"
                    name=""
                    id=""
                    placeholder="City Or Airport"
>>>>>>> 44efa93c0ce4a0e8cc12939e7a5844eff8e4bba6
                  />
                </div>

                <div className="">
                  <label for="">To where ?</label>
                  <input
<<<<<<< HEAD
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                    onChange={(e)=>{setDestination(e.target.value)}}
=======
                    type="text"
                    name=""
                    id=""
                    placeholder="City Or Airport"
>>>>>>> 44efa93c0ce4a0e8cc12939e7a5844eff8e4bba6
                  />
                </div>
              </div>

              <div className={Styles.flightform__date}>
                <div className="">
                  <label for="">Leaving On</label>
                  <input
<<<<<<< HEAD
                    type='date'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                    onChange={(e)=>{setDepDate(e.target.value)}}
                  />
                </div>

                {/* <div className=''>
                  <label for=''>Returning On</label>
=======
                    type="date"
                    name=""
                    id=""
                    placeholder="City Or Airport"
                  />
                </div>

                <div className="">
                  <label for="">Returning On</label>
>>>>>>> 44efa93c0ce4a0e8cc12939e7a5844eff8e4bba6
                  <input
                    type="date"
                    name=""
                    id=""
                    placeholder="City Or Airport"
                  />
                </div> */}
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

export default FlightTicket;
