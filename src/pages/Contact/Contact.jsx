import React from "react";
import "./Contact.css";
import goodByeImage from "../../assets/images/travel 1.png";

function Contact() {
  return (
    <section className='contact__page'>
      <div className='contact-left'>
        <div className='contact-text'>
          <h1>We’d love to</h1>
          <h1>hear from You!</h1>
        </div>
        <div className='phone'>
          <i className='fas fa-phone-alt' style={{ fontSize: "20px" }}></i>
          +234 123 4567
        </div>
        <div className='msg'>
          <i className='far fa-envelope' style={{ fontSize: "20px" }}></i>
          info@ticketxpress.com
        </div>

        <div className='contact-img'>
          <img src={goodByeImage} alt='img' />
        </div>
      </div>

      <div className='contact-right'>
        <h1>Contact Us</h1>
        <form className='contactform'>
          <div className='formGroup'>
            <label for='name'>Full Name</label>
            <input
              id='name'
              type='text'
              placeholder='Full Name'
              required
              className='form-control'
            />
            <div className='error-hint hidden'>Your name is required</div>
          </div>
          <div className='row'>
            <div className='formGroup'>
              <label for='email'>Email</label>
              <input
                id='email'
                type='email'
                required
                className='form-control'
                placeholder='Enter Email'
              />
              <div className='error-hint hidden'>Your Email is required</div>
            </div>
            <div className='formGroup'>
              <label for='lastname'>Phone Number</label>
              <input
                id='phone'
                type='text'
                required
                placeholder='Enter Phone number'
                className='form-control'
              />
            </div>
          </div>

          <div className='formGroup'>
            <label for='text'>Message</label>
            <textarea id='message' placeholder='Message Here'>
              {" "}
            </textarea>
          </div>

          <div className='submitBtn'>
            <button className='subBtn'>Submit</button>
          </div>
        </form>
        <div className='hidden thank-you'>Thank you for your feedback</div>
      </div>
    </section>
  );
}

export default Contact;
