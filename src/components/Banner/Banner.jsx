import React from "react";
import "./Banner.css";
import heroImage from "../../assets/images/Hero-Image.png";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <section id='heroSection'>
      <div className='hero_section_container'>
        <div className='heroText'>
          <div id='heroText2'>
            <div id='hero-decore'></div>
            <div>
              <h3 id='heroLabel'>Best all in one booking platform</h3>
              <h1>Ticket Xpress, your all in one booking ticket.</h1>
            </div>

            <p id='heroDetails'>
              Our goal is to centralize transport industry, and make ticket
              bookings to your preffered location easily accessible from the
              comfort of your home.
            </p>

            <Link to='/flight' id='book-Btn'>
              <span>Book</span>
            </Link>
          </div>
        </div>

        <div id='hero-Img'>
          <img src={heroImage} alt='' />
        </div>
      </div>
    </section>
  );
}

export default Banner;
