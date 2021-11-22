import React from "react";
import Decore from "../../assets/images/Decore.png";
import addIcon from "../../assets/images/ticket-page/add-ticket.png";

function MyTicket({ title, text, image }) {
  return (
    <div className='box'>
      <div className='circle'>
        <div className='decore'>
          <img src={Decore} alt='Decore' />
        </div>
        <img src={addIcon} alt='get ticket' />
      </div>
      <h3>Get My Ticket</h3>
      <p>
        Yet to get your ticket? This service allows you to request htmlFor ticket on
        a paid booking.
      </p>
      <p className='select'>
        <a href='/'>SELECT</a>
      </p>
    </div>
  );
}

export default MyTicket;
