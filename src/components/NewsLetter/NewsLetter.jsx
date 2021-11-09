import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section className='newsletter'>
      <div className='newsletter__rings'>
        <img
          src='../../assets/images/newsletterimage/rings1.png'
          alt=''
          className='rings1'
        />
        <img
          src='../../assets/images/newsletterimage/rings2.png'
          alt=''
          className='rings2'
        />
      </div>
      <h2 className='newsletter__heading'>
        Subscribe to get information, latest news and other interesting offers
        about Ticket Xpress.
      </h2>
      <form action='' className='newsletter__form'>
        <div className='newsletter__input'>
          <img
            src='../../assets/images/newsletterimage/mail.png'
            alt=''
            className='newsletter__icon'
          />
          <input
            type='text'
            placeholder='Your Email'
            className='newsletter__text-box'
          />
        </div>
        <button className='btn'>Subscribe</button>
      </form>
    </section>
  );
}

export default NewsLetter;
