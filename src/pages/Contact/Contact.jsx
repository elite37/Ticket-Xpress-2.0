import React from "react";
import { Link } from "react-router-dom";
import "./Contact.css";
import goodByeImage from "../../assets/images/travel 1.png";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const initialValues = {
  fullname: "",
  email: "",
  phonenumber: "",
  message: "",
};

const validationSchema = Yup.object({
  fullname: Yup.string().required("Input field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required!"),
  phonenumber: Yup.string().required("Input field is required"),
  message: Yup.string()
    .min(15, "Min of 150 words ")
    .required("Input field is required"),
});

const onSubmit = (values) => {
  console.log(JSON.stringify(values));
};

function Contact() {
  return (
    <section className="contact__page">
      <div className="contact-left">
        <div className="contact-text">
          <h1>We’d love to</h1>
          <h1>hear from You!</h1>
        </div>
        <div className="phone">
          <i className="fas fa-phone-alt" style={{ fontSize: "20px" }}></i>
          +234 123 4567
        </div>
        <div className="msg">
          <i className="far fa-envelope" style={{ fontSize: "20px" }}></i>
          info@ticketxpress.com
        </div>
        <div className="contact-img">
          <Link to="/">
            <img src={goodByeImage} alt="img" />
          </Link>
        </div>
      </div>

      <p id="authError" className="error"></p>
      <div className="contact-right">
        <h1>Contact Us</h1>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            <div className="formGroup">
              <label for="name">Full Name</label>
              <Field
                id="name"
                type="fullname"
                name="fullname"
                placeholder="Full Name"
                required
                className="form-control"
              />
              {/* <div className="error-hint hidden">Your name is required</div> */}
              <ErrorMessage name="fullname" component="div" />
            </div>
            <div className="row">
              <div className="formGroup">
                <label for="email">Email</label>
                <Field
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="form-control"
                  placeholder="Enter Email"
                />
                {/* <div className="error-hint hidden">Your Email is required</div> */}
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formGroup">
                <label for="phonenumber">Phone Number</label>
                <Field
                  id="phone"
                  type="phonenumber"
                  name="phonenumber"
                  required
                  placeholder="Enter Phone number"
                  className="form-control"
                />
              </div>
              <ErrorMessage name="phonenumber" component="div" />
            </div>

            <div className="formGroup">
              <label for="text">Message</label>
              <textarea id="message" placeholder="Message Here" type="text">
                {" "}
              </textarea>
            </div>

            <div className="submitBtn">
              <input id="submitButton" type="submit" value="Submit" />
            </div>
          </Form>
        </Formik>
        <div className="hidden thank-you">Thank you for your feedback</div>
      </div>
    </section>
  );
}

export default Contact;
