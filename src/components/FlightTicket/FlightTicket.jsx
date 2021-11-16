import { Link } from "react-router-dom";
import Date from "./Date";
import styles from "./FlightTicket.module.css";
import Location from "./Location";

function FlightTicket(props) {
  return (
    <div className={`${styles.flightbooking}`}>
      <div className={`${styles.flightbooking__container}`}>
        <div className={`${styles.flightbooking__top}`}>
          <div className={`${styles.flight__option} ${styles.active}`}>
            <Link to='/flight'>
              {" "}
              <span>Book Flight</span>
              <div className=''>
                <i className={`${styles.fas} ${styles.faPlane}`}></i>
              </div>
            </Link>
          </div>
          <div className={`${styles.flight__option}`}>
            <Link to='/bus'>
              {" "}
              <span>Book Bus</span>
              <div className=''>
                {" "}
                <i className={`${styles.fas} ${styles.faBus}`}></i>
              </div>
            </Link>
          </div>
          <div className={`${styles.flight__option}`}>
            <Link to='/train'>
              {" "}
              <span>Book Train</span>
              <div className=''>
                <i className={`${styles.fas} ${styles.faTrain}`}></i>
              </div>
            </Link>
          </div>
        </div>

        <div className={`${styles.flightbooking__bottom}`}>
          <div className={`${styles.flighttypes}`}>
            <div className={`${styles.flighttype}`}>
            <input
              className={`${styles.optionCheckbox}`}
              onChange={(e)=>props.setRoundTrip(e.target.checked)}
              type='checkbox'
            />
              Round Trip
            </div>
            <div className={`${styles.flighttype}`}>
              <a href='/'>
                <input
                  onChange={(e)=>{
                    props.setAdults(e.target.value)
                  }}
                />
                Adults
                <div className=''>
                  <i className={`${styles.fas} ${styles.faSortDown}`}></i>
                </div>
              </a>
            </div>
            <div className={`${styles.flighttype}`}>
              <a href='/'>
                Economy
                <div className=''>
                  <i className={`${styles.fas} ${styles.faSortDown}`}></i>
                </div>
              </a>
            </div>
          </div>

          <form action='' className={`${styles.flightform}`}>
            <div className={`${styles.flightform__conn}`}>
              <div className={`${styles.flightform__from}`}>
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

              <Date
                label='Leaving on'
                onChange={props.setDepDate}
              />

              {props.roundTrip && 
                <Date
                  label='Returning on'
                  onChange={props.setRetDate}
                />
              }
            </div>

            <div className={`${styles.submitdiv}`}>
              <input type='submit' value="Let's Go" className={`${styles.flightsubmit}`} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FlightTicket;
