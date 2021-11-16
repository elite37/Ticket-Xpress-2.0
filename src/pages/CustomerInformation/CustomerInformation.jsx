import React from 'react'
import useTitle from "../../hooks/useTItle/useTitle";
import Brand from "../../assets/images/Customerinformation/expedia.png"
import { Link } from "react-router-dom";
import NotificationBar from '../../components/NotificationBar';
import "./CustomerInformation.css"


function CustomerInformation() {
  useTitle("Additional Information");
  
  return (
    <main>
      <NotificationBar />
      <div className="whole">
        <div className="sidebar">Sidebar</div>
        <div className="main">
          <div className="info">
            <div className="flight_itinerary">
              <div className="flight_itinerary_header">
                <p>Flight Itinerary</p>
                <Link to="/">Change</Link>
              </div>
              <hr />
              <div className="flight_itinerary_body">
                <div className="brand">
                  <img src={Brand} alt="brand" />
                </div>
                <div className="flight_itinerary_body_brand_info">
                  <p>Expedia</p>
                  <h3>Oct 18, 2021</h3>
                </div>
              </div>
              <div className="flight_itinerary_info">
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>17:00</strong>
                    (ABV)
                  </p>
                  <p>Abuja.</p>
                  <p>
                    <small>Nnamdi Azikwe International Airport</small>
                  </p>
                </div>
                <div className="flight_itinerary_info_dnt">
                  <p>
                    <strong>0h 0m</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>0 stops</strong>
                  </p>
                </div>
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>18:00</strong>
                    (LOS)
                  </p>
                  <p>Lagos.</p>
                  <p>
                    <small>Muritala Muhammed International Airport</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="flight_itinerary">
              <div className="flight_itinerary_header">
                <p>Who is Traveling?</p>
                <Link to="/">
                  Your personal data is protected.
                  <i class="fas fa-lock"></i>
                </Link>
              </div>
              <hr />
              <div className="flight_itinerary_body">
                <div className="brand">
                  <img src={Brand} alt="brand" />
                </div>
                <div className="flight_itinerary_body_brand_info">
                  <p>Expedia</p>
                  <h3>Oct 18, 2021</h3>
                </div>
              </div>
              <div className="flight_itinerary_info">
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>17:00</strong>
                    (ABV)
                  </p>
                  <p>Abuja.</p>
                  <p>
                    <small>Nnamdi Azikwe International Airport</small>
                  </p>
                </div>
                <div className="flight_itinerary_info_dnt">
                  <p>
                    <strong>0h 0m</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>0 stops</strong>
                  </p>
                </div>
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>18:00</strong>
                    (LOS)
                  </p>
                  <p>Lagos.</p>
                  <p>
                    <small>Muritala Muhammed International Airport</small>
                  </p>
                </div>
              </div>
              <div className="blue_notice">
                <i className="fas fa-3x fa-info-circle"></i>
                <p>
                  Use all given Names and surname exactly as they appear on the
                  passport/ID to avoid conflict actions.
                </p>
              </div>
            </div>
          </div>
          <div className="info">Here</div>
          <div className="info">Here</div>
          <div className="info">Here</div>
        </div>
      </div>
    </main>
  );
}

export default CustomerInformation;