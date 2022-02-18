import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-row'>
          <div className='footer-content'>
            <h2>
              <img src={Logo} alt='logo' />
            </h2>
            <p>Book your Ticket in minute, get full control htmlFor much longer.</p>
          </div>
          <div className='footer-content'>
            <h2>Company</h2>
            <ul>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
              <li>
                <a href='/'>Mobile</a>
              </li>
            </ul>
          </div>
          <div className='footer-content'>
            <h2>Contact</h2>
            <ul>
              <li>
                <a href='/'>Help/FACT</a>
              </li>
              <li>
                <a href='/'>Press</a>
              </li>
              <li>
                <a href='/'>Affiliates</a>
              </li>
            </ul>
          </div>
          <div className='footer-content'>
            <h2>More</h2>
            <ul>
              <li>
                <a href='/'>Airlines</a>
              </li>
              <li>
                <a href='/'>Train Stations</a>
              </li>
              <li>
                <a href='/'>Bus Stations</a>
              </li>
            </ul>
          </div>
        </div>

        <div className='right'>
          <p>All rights reserved@TicketExpresss.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
