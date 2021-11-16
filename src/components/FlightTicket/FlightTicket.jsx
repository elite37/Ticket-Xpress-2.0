import React from "react";
import { Link } from "react-router-dom";
import "./FlightTicket.css";
import Location from "./Location";

function FlightTicket(props) {

  return (
    <div className='flightbooking'>
      <div className='flightbooking__container'>
        <div className='flightbooking__top'>
          <div className='flight__option active'>
            <Link to='/flight'>
              {" "}
              <span>Book Flight</span>
              <div className=''>
                <i className='fas fa-plane'></i>
              </div>
            </Link>
          </div>
          <div className='flight__option'>
            <Link to='/bus'>
              {" "}
              <span>Book Bus</span>
              <div className=''>
                {" "}
                <i className='fas fa-bus'></i>
              </div>
            </Link>
          </div>
          <div className='flight__option'>
            <Link to='/train'>
              {" "}
              <span>Book Train</span>
              <div className=''>
                <i className='fas fa-train'></i>
              </div>
            </Link>
          </div>
        </div>
        <div className='flightbooking__bottom'>
          <div className='flighttypes'>
            <div className='filghttype'>
              <a href='/'>
                Round Trip
                <div className=''>
                  <i className='fas fa-sort-down'></i>
                </div>
              </a>
            </div>
            <div className='filghttype'>
              <a href='/'>
                1 Passenger
                <div className=''>
                  <i className='fas fa-sort-down'></i>
                </div>
              </a>
            </div>
            <div className='filghttype'>
              <a href='/'>
                Economy
                <div className=''>
                  <i className='fas fa-sort-down'></i>
                </div>
              </a>
            </div>
          </div>

          <form action='' className='flightform'>
            <div className='flightform__conn'>
              <div className='flightform__from'>
                <div className=''>
                  <label htmlFor=''>From where ?</label>
                  <Location
                    type='text'
                    placeholder='City'
                    onChange={props.setOrigin}
                  />
                </div>

                <div className=''>
                  <label htmlFor=''>To where ?</label>
                  <Location
                    type='text'
                    placeholder='City'
                    onChange={props.setDestination}
                  />
                </div>
              </div>

              <div className='flightform__date'>
                <div className=''>
                  <label htmlFor=''>Leaving On</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                    onChange={(e)=>{props.setDepDate(e.target.value)}}
                  />
                </div>

                {/* <div className=''>
                  <label htmlFor=''>Returning On</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                  />
                </div> */}
              </div>
            </div>

            <div className='submitdiv'>
              <input type='submit' value="Let's Go" className='flightsubmit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FlightTicket;
