import React from "react";
import "./NewsLetter.css";

function NewsLetter() {
  return (
    <section class='newsletter'>
      <div class='newsletter__rings'>
        <img
          src='../../assets/images/newsletterimage/rings1.png'
          alt=''
          class='rings1'
        />
        <img
          src='../../assets/images/newsletterimage/rings2.png'
          alt=''
          class='rings2'
        />
      </div>
      <h2 class='newsletter__heading'>
        Subscribe to get information, latest news and other interesting offers
        about Ticket Xpress.
      </h2>
      <form action='' class='newsletter__form'>
        <div class='newsletter__input'>
          <img
            src='../../assets/images/newsletterimage/mail.png'
            alt=''
            class='newsletter__icon'
          />
          <input
            type='text'
            placeholder='Your Email'
            class='newsletter__text-box'
          />
        </div>
        <button class='btn'>Subscribe</button>
      </form>
    </section>
  );
}

export default NewsLetter;
