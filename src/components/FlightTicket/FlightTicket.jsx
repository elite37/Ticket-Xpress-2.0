import React from "react";
import { Link } from "react-router-dom";
import "./FlightTicket.css";

function FlightTicket() {
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
                  <label for=''>From where ?</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                  />
                </div>

                <div className=''>
                  <label for=''>To where ?</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                  />
                </div>
              </div>

              <div className='flightform__date'>
                <div className=''>
                  <label for=''>Leaving On</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                  />
                </div>

                <div className=''>
                  <label for=''>Returning On</label>
                  <input
                    type='date'
                    name=''
                    id=''
                    placeholder='City Or Airport'
                  />
                </div>
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
