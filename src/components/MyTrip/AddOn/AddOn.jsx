import React from "react";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

function AddOn(props) {
  return (
    <div className="Booking_Container1">
      <div className="Booking_Container">
        <div className="Booking_Header">
          <div className="Booking_title">
            <h2>{props.title}</h2>
          </div>
          <div className="Booking_Body">
            <p>{props.body}</p>
            <Link to="" className="link_body">
              Terms and Conditions
            </Link>
          </div>
        </div>

        <div className="Booking_Body2">
          <h1>N39500</h1>
          <p>per passenger</p>
          <button className="Trip_Btn">
            ADD <AiOutlinePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddOn;
