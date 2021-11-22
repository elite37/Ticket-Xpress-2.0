import React, { useState, useMemo } from 'react';
import useTitle from "../../hooks/useTItle/useTitle";
import Brand from "../../assets/images/Customerinformation/expedia.png";
import { Link } from "react-router-dom";
import NotificationBar from  "../../components/NotificationBar";
import "./CustomerInformation.css";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import countryList from "react-select-country-list";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchem = Yup.object({
  firstname: Yup.string().required("Input field is required"),
  lastname: Yup.string().required("input field is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirm_password: Yup.string()
    .required("Please confirm password")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Password does not match"
      ),
    }),
});

const onSubmit = (values) => {
  console.log(JSON.stringify(values));
};

function CustomerInformation() {
  useTitle("Additional Information");

  function CountrySelector() {
    const [value, setValue] = useState("");
    const options = useMemo(() => countryList().getData(), []);

    const changeHandler = (value) => {
      setValue(value);
    };
  }

  return (
    <main>
      <NotificationBar />
      <div className="whole">
        <div className="sidebar">Sidebar</div>
        <div className="main">
          <div className="info">
            <div className="flight_itinerary">
              <div className="flight_itinerary_header">
                <p>Flight Itinerary</p>
                <Link to="/">Change</Link>
              </div>
              <hr />
              <div className="flight_itinerary_body">
                <div className="brand">
                  <img src={Brand} alt="brand" />
                </div>
                <div className="flight_itinerary_body_brand_info">
                  <p>Expedia</p>
                  <h3>Oct 18, 2021</h3>
                </div>
              </div>
              <div className="flight_itinerary_info">
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>17:00</strong>
                    (ABV)
                  </p>
                  <p>Abuja.</p>
                  <p>
                    <small>Nnamdi Azikwe International Airport</small>
                  </p>
                </div>
                <div className="flight_itinerary_info_dnt">
                  <p>
                    <strong>0h 0m</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>0 stops</strong>
                  </p>
                </div>
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>18:00</strong>
                    (LOS)
                  </p>
                  <p>Lagos.</p>
                  <p>
                    <small>Muritala Muhammed International Airport</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="info">
            <div className="flight_itinerary">
              <div className="flight_itinerary_header">
                <p>Who is Traveling?</p>
                <Link to="/">
                  Your personal data is protected.
                  <i class="fas fa-lock"></i>
                </Link>
              </div>
              <hr />
              <div className="flight_itinerary_body">
                <div className="brand">
                  <img src={Brand} alt="brand" />
                </div>
                <div className="flight_itinerary_body_brand_info">
                  <p>Expedia</p>
                  <h3>Oct 18, 2021</h3>
                </div>
              </div>
              <div className="flight_itinerary_info">
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>17:00</strong>
                    (ABV)
                  </p>
                  <p>Abuja.</p>
                  <p>
                    <small>Nnamdi Azikwe International Airport</small>
                  </p>
                </div>
                <div className="flight_itinerary_info_dnt">
                  <p>
                    <strong>0h 0m</strong>
                  </p>
                  <hr />
                  <p>
                    <strong>0 stops</strong>
                  </p>
                </div>
                <div className="flight_itinerary_info_location">
                  <p>
                    <strong>18:00</strong>
                    (LOS)
                  </p>
                  <p>Lagos.</p>
                  <p>
                    <small>Muritala Muhammed International Airport</small>
                  </p>
                </div>
              </div>
              <div className="blue_notice">
                <i className="fas fa-3x fa-info-circle"></i>
                <p>
                  Use all given Names and surname exactly as they
                  <br /> appear on the passport/ID to avoid conflict actions.
                </p>
              </div>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchem}
                onSubmit={onSubmit}
              >
                <Form>
                  <div className="form_group">
                    <div className="form_group_header">
                      <p>Passenger 1(Adult - Primary Contact)</p>
                    </div>
                    <div className="form_group_body">
                      <div className="form_group_body_input">
                        <label for="surname">
                          Surname
                          <span> *</span>
                        </label>
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="Title"
                          className="dropdown"
                        >
                          <option value="title">Title</option>
                          <option value="master">Master</option>
                          <option value="miss">Miss</option>
                          <option value="mr">Mr</option>
                          <option value="mrs">Mrs</option>
                        </Field>
                        <ErrorMessage name="title" component="div" />
                      </div>
                      <div className="form_group_body_input">
                        <br />
                        <Field
                          id="last_name"
                          type="text"
                          name="last_name"
                          placeholder="Last Name as on intl. Passport"
                          className="text"
                        />
                        <ErrorMessage name="last_name" component="div" />
                      </div>
                    </div>
                    <div className="form_group_body">
                      <div className="form_group_body_input">
                        <label for="firstname">
                          First Name
                          <span> *</span>
                        </label>
                        <Field
                          id="first_name"
                          type="text"
                          name="first_name"
                          className="text"
                          placeholder="First Name as on intl. Passport"
                        />
                        <ErrorMessage name="firstname" component="div" />
                      </div>
                      <div className="form_group_body_input">
                        <label for="middle_name">
                          Middle Name
                          <span> *</span>
                        </label>
                        <Field
                          id="middle_name"
                          type="text"
                          name="middle_name"
                          className="text"
                          placeholder="Middle Name as on intl. Passport"
                        />
                        <ErrorMessage name="middle_name" component="div" />
                      </div>
                    </div>
                    <div className="form_group_body">
                      <div className="form_group_body_input">
                        <label for="surname">
                          Nationality
                          <span> *</span>
                        </label>
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="Nationality"
                          className="dropdown"
                        >
                          <option value="usa">USA</option>
                          <option value="togo">Togo</option>
                          <option value="canada">Canada</option>
                        </Field>
                        <ErrorMessage name="title" component="div" />
                      </div>
                      <div className="form_group_body_input">
                        <label for="surname">
                          Gender
                          <span> *</span>
                        </label>
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="Gender"
                          className="dropdown"
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="transgender">Transgender</option>
                        </Field>
                        <ErrorMessage name="title" component="div" />
                      </div>
                    </div>
                    <div className="form_group_body">
                      <div className="form_group_body_input">
                        <label for="surname">
                          Date of Birth
                          <span> *</span>
                        </label>
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="dob_year"
                          className="dropdown"
                        >
                          <option value="month">Year</option>
                          <option value="january">2021</option>
                          <option value="febuary">2020</option>
                        </Field>
                        <ErrorMessage name="title" component="div" />
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="dob_month"
                          className="dropdown"
                        >
                          <option value="male">Month</option>
                          <option value="female">January</option>
                          <option value="transgender">Febuary</option>
                        </Field>
                        <ErrorMessage name="title" component="div" />
                        <Field
                          as="select"
                          id="title"
                          type="select"
                          name="dob_day"
                          className="dropdown"
                        >
                          <option value="day">Day</option>
                          <option value="01">01</option>
                          <option value="02">02</option>
                        </Field>
                      </div>
                    </div>
                    <div className="form_group_body form_checkbox">
                      <input type="checkbox" name="check" id="check" />
                      <label for="checkbox">
                        Save the traveller info and Contact details for a
                        <strong> fast checkout </strong>
                      </label>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
      <div className="info wide">
        <div className="flight_itinerary">
          <div className="flight_itinerary_header">
            <p>Where should we send your confirmation?</p>
            <Link to="/">
              Your personal data is protected.
              <i class="fas fa-lock"></i>
            </Link>
          </div>
          <hr />
        </div>
        <div className="flight_itinerary_body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchem}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="form_group">
                <div className="form_group_body">
                  <div className="form_group_body_input">
                    <label for="email_address">Email Address</label>
                    <Field
                      id="email"
                      type="email"
                      name="email"
                      placeholder="example@gmail.com"
                      className="text"
                    />
                    <ErrorMessage name="email" component="div" />
                  </div>
                  <div className="form_group_body_input">
                    <label for="phone_number">Phone Number</label>
                    <Field
                      id="phone_number"
                      type=" number"
                      name="phone_number"
                      placeholder="+234"
                      className="text"
                    />
                    <ErrorMessage name="phone_number" component="div" />
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="info wide">
        <div className="flight_itinerary_header blue_header">
          <p>Choose a seat</p>
          <Link to="/">
            <i class="fas fa-chevron-down"></i>
          </Link>
        </div>
      </div>
      <div className="info wide">
        <div className="flight_itinerary_header blue_header">
        <p>Add Extra Baggage</p>
        <Link to="/">
          <i class="fas fa-chevron-down"></i>
        </Link>
        </div>
      </div>
      <div className="info wide">
        <div className="flight_itinerary">
          <div className="flight_itinerary_header">
            <p>Membership Card Number / Promo Code</p>
            <i class="fas fa-chevron-up"></i>
          </div>
          <hr />
        </div>
        <div className="flight_itinerary_body">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchem}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="form_group">
                <div className="form_group_body">
                  <div className="form_group_body_input">
                  <label for="promo_code">Enter Promo Code</label>
                  <Field
                    id="code"
                    type="text"
                    name="promo_code"
                    placeholder=""
                    className="form-control"
                  />
                  <ErrorMessage name="promo_code" component="div" />
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="info wide">
        <div className="flight_itinerary_header blue_header">
        <p>Do you have a Corporate code?</p>
        <Link to="/">
        <i class="fas fa-chevron-down"></i>
        </Link>
      </div>
      </div>
      <div className="form_group_body">
        <input type="checkbox" name="check" id="check" />
        <label for="checkbox">
          By processing, I acknowledge that i have read and agree to Ticket Xpress bookings 
          <span> terms and conditions. </span>
        </label>
      </div>
    </main>
  );
}

export default CustomerInformation;
