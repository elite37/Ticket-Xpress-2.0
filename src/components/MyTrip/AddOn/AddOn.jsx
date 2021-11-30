import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import MytripStyles from "./TripPage.module.css";

function AddOn(props) {
  return (
    <div className={MytripStyles.Booking_Container1}>
      <div className={MytripStyles.Booking_Container}>
        <div className={MytripStyles.Booking_Header}>
          <div className={MytripStyles.Booking_title}>
            <h2>{props.title}</h2>
          </div>
          <div className={MytripStyles.Booking_Body}>
            <p>{props.body}</p>
            <Link to="" className={MytripStyles.link_body}>
              Terms and Conditions
            </Link>
          </div>
        </div>

        <div className={MytripStyles.Booking_Body2}>
          <h1>N39500</h1>
          <p>per passenger</p>
          <button className={MytripStyles.Trip_Btn}>
            ADD <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOn;
