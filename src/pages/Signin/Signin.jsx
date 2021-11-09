import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import heroImage from "../../assets/images/Hero-Image.png";

function Signin() {
  return (
    <section className="userform signup">
      <div className="userform__left">
        <Link to="/">
          <img src={heroImage} alt="TicketXpress" />
        </Link>
      </div>
      <div className="userform__right">
        <div className="useform__conn">
          <h1>Welcome</h1>
          <p className="userform__switch">
            Don't Have An Account?
            <Link to="/signup">Sign Up</Link>
          </p>

          <div className="alternative__signin">
            <div className="alt alt1">
              <button>
                <a
                  href="https://www.freepnglogos.com/pics/google-logo"
                  title="Image from freepnglogos.com"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                    width="200"
                    alt="google logo png webinar optimizing for success google business webinar"
                  />
                </a>
                Sign Up With Google
              </button>
            </div>
            <div className="alt alt2">
              <button>
                <Link
                  to="https://www.freepnglogos.com/pics/facebook-logo"
                  title="Image from freepnglogos.com"
                >
                  <img
                    src="https://www.freepnglogos.com/uploads/facebook-logo-13.png"
                    width="200"
                    alt="logo facebook download png"
                  />
                </Link>
                Sign Up With Facebook
              </button>
            </div>
          </div>

          <div className="or">
            <hr />
            <p>OR</p>
            <hr />
          </div>

          <p id="authError" className="error"></p>

          <form action="" className="userformed">
            <div className="formGroup">
              <label for="emailaddress">Email Address</label>
              <input id="emailField" type="email" />
            </div>
            <div className="formGroup">
              <label for="lastname">Password</label>
              <input id="passwordField" type="password" />
            </div>

            <div className="remember">
              <div className="rememberMe">
                <input type="checkbox" name="" id="" />
                <label for="">Remember Me</label>
              </div>

              <div className="forgotPass">
                <a href="/">Forgot Password?</a>
              </div>
            </div>

            <div className="signsub">
              <input id="loginButton" type="submit" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signin;
