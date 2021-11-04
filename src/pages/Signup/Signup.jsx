import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import heroImage from "../../assets/images/Hero-Image.png";

function Signup() {
  return (
    <section className='userform signup'>
      <div className='userform__left'>
        <Link to='/'>
          <img src={heroImage} alt='TicketXpress' />
        </Link>
      </div>
      <div className='userform__right'>
        <div className='useform__conn'>
          <h1>Get Started</h1>
          <p className='userform__switch'>
            Already Have An Account?
            <Link to='/signin'>Login</Link>
          </p>

          <div className='alternative__signin'>
            <div className='alt alt1'>
              <button>
                <Link
                  to='https://www.freepnglogos.com/pics/google-logo'
                  title='Image from freepnglogos.com'
                >
                  <img
                    src='https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png'
                    width='200'
                    alt='google logo png webinar optimizing for success google business webinar'
                  />
                </Link>
                Sign Up With Google
              </button>
            </div>
            <div className='alt alt2'>
              <button>
                <Link
                  to='https://www.freepnglogos.com/pics/facebook-logo'
                  title='Image from freepnglogos.com'
                >
                  <img
                    src='https://www.freepnglogos.com/uploads/facebook-logo-13.png'
                    width='200'
                    alt='logo facebook download png'
                  />
                </Link>
                Sign Up With Facebook
              </button>
            </div>
          </div>

          <div className='or'>
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <p id='authError' className='error'></p>

          <form action='' className='userformed'>
            <div className='row'>
              <div className='formGroup'>
                <label for='firstname'>First Name</label>
                <input
                  id='firstNameField'
                  type='text'
                  required
                  pattern='(.*)\s(.*)'
                  className='form-control'
                />
              </div>
              <div className='formGroup'>
                <label for='lastname'>Last Name</label>
                <input
                  id='lastNameField'
                  type='text'
                  required
                  pattern='(.*)\s(.*)'
                  className='form-control'
                />
              </div>
            </div>
            <div className='formGroup'>
              <label for='emailaddress'>Email Address</label>
              <input
                id='emailField'
                type='email'
                required
                className='form-control'
              />
            </div>
            <div className='formGroup'>
              <label for='lastname'>Password</label>
              <input
                id='passwordField'
                type='password'
                required
                className='form-control'
              />
            </div>

            <div className='condition'>
              <input type='checkbox' name='' id='' />
              <label for='condition'>
                I agree to the platform's
                <a href='/'>Terms Of Services</a>
                and
                <a href='/'>Privacy And Policy</a>
              </label>
            </div>

            <div className='signsub'>
              <input id='signUpButton' type='submit' value='Register' />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
