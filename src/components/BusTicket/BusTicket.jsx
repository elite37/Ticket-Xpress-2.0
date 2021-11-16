import React from "react";
import { Link } from "react-router-dom";
import "./BusTicket.css";

function BusTicket() {
  return (
    <div className='flightbooking'>
      <div className='flightbooking__container'>
        <div className='flightbooking__top'>
          <div className='flight__option'>
            <Link to='/flight'>
              <span>Book Flight</span>
              <div className='./flightbooking.html'>
                <i className='fas fa-plane'></i>
              </div>
            </Link>
          </div>
          <div className='flight__option active'>
            <Link to='/bus'>
              <span>Book Bus</span>
              <div className='#'>
                <i className='fas fa-bus'></i>
              </div>
            </Link>
          </div>
          <div className='flight__option'>
            <Link to='/train'>
              <span>Book Train</span>
              <div className='#'>
                <i className='fas fa-train'></i>
              </div>
            </Link>
          </div>
        </div>

        <div className='flightbooking__bottom'>
          <div className='flighttypes'>
            <div className='filghttype'>
              <Link href='/'>
                Round Trip
                <div className=''>
                  <i className='fas fa-sort-down'></i>
                </div>
              </Link>
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
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Terminal'
                  />
                </div>

                <div className=''>
                  <label htmlFor=''>To where ?</label>
                  <input
                    type='text'
                    name=''
                    id=''
                    placeholder='City Or Terminal'
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
                  />
                </div>

                <div className=''>
                  <label htmlFor=''>Returning On</label>
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

export default BusTicket;
