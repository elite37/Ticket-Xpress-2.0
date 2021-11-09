import React from "react";
import { Link } from "react-router-dom";
import "./Signin.css";
import heroImage from "../../assets/images/Hero-Image.png";
import Google from "../../assets/images/signup/google.png";
import Facebook from "../../assets/images/signup/facebook.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required!"),
  password: Yup.string().required("Password is required"),
});

const onSubmmit = (values) => {
  console.log(JSON.stringify(values));
};

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
                <Link to="https://google.com">
                  <img
                    src={Google}
                    width="200"
                    alt="google logo png webinar optimizing for success google business webinar"
                  />
                </Link>
                Sign Up With Google
              </button>
            </div>
            <div className="alt alt2">
              <button>
                <Link to="https://facebook.com">
                  <img
                    src={Facebook}
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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmmit}
          >
            <Form>
              <div className="formGroup">
                <label for="emailaddress">Email Address</label>
                <Field id="emailField" name="email" type="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formGroup">
                <label for="lastname">Password</label>
                <Field id="passwordField" name="password" type="password" />
                <ErrorMessage name="password" component="div" />
              </div>

              <div className="remember">
                <div className="rememberMe">
                  <input type="checkbox" name="" id="" />
                  <label for="">Remeber Me</label>
                </div>

                <div className="forgotPass">
                  <a href="/">Forgot Password?</a>
                </div>
              </div>

              <div className="signsub">
                <input id="loginButton" type="submit" value="Login" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Signin;
