import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import heroImage from "../../assets/images/Hero-Image.png";
import Google from "../../assets/images/signup/google.png"
import Facebook from "../../assets/images/signup/facebook.png"
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
};

const validationSchem = Yup.object({
  firstname: Yup.string().required("Input field is required"),
  lastname: Yup.string().required("input field is required"),
  email: Yup.string()
    .email("Input valid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const onSubmit = (values) => {
  console.log(JSON.stringify(values));
  
};

function Signup() {
  return (
    <section className="userform signup">
      <div className="userform__left">
        <Link to="/">
          <img src={heroImage} alt="TicketXpress" />
        </Link>
      </div>
      <div className="userform__right">
        <div className="useform__conn">
          <h1>Get Started</h1>
          <p className="userform__switch">
            Already Have An Account?
            <Link to="/signin">Login</Link>
          </p>

          <div className="alternative__signin">
            <div className="alt alt1">
              <button>
                <Link
                  to="https://google.com"
                  title="google"
                >
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
                <Link
                  to="https://facebook.com"
                  title="facebook"
                >
                  <img
                    src={Facebook}
                    width="200"
                    alt="facebook"
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
            validationSchema={validationSchem}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="row">
                <div className="formGroup">
                  <label for="firstname">First Name</label>
                  <Field
                    id="firstNameField"
                    type="text"
                    name="firstname"
                    className="form-control"
                  />
                  <ErrorMessage name="firstname" component="div" />
                </div>
                <div className="formGroup">
                  <label for="lastname">Last Name</label>
                  <Field
                    id="lastNameField"
                    type="text"
                    name="lastname"
                    className="form-control"
                  />
                  <ErrorMessage name="lastname" component="div" />
                </div>
              </div>
              <div className="formGroup">
                <label for="emailaddress">Email Address</label>
                <Field
                  id="emailField"
                  type="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formGroup">
                <label for="password">Password</label>
                <Field
                  id="passwordField"
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage name="password" component="password" />
              </div>

              <div className="condition">
                <input type="checkbox" name="" id="" />
                <label for="condition">
                  I agree to the platform's
                  <a href="/">Terms Of Services</a>
                  and
                  <a href="/">Privacy And Policy</a>
                </label>
              </div>

              <div className="signsub">
                <input id="signUpButton" type="submit" value="Register" />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Signup;
