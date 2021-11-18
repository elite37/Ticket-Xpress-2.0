import React, {useState} from "react";
import { Link, useHistory } from "react-router-dom";
import RadioGroup from '../../components/UI/RadioGroup'
import "./Signup.css";
import { api } from "../../utils/api";
import { useDispatch } from "react-redux";
import { setUser } from "../../state/slices/user";
import * as cookie from "cookie";
import heroImage from "../../assets/images/Hero-Image.png";
import Google from "../../assets/images/signup/google.png";
import Facebook from "../../assets/images/signup/facebook.png";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const customerType = 'customer'
const agentType = 'agent'

const initialValues = {
  userType: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const validationSchema = Yup.object({
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

const userTypes = [
  {
    value: customerType,
    text: 'Customer'
  },
  {
    value: agentType,
    text: 'Agent'
  }
]

function Signup() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userType, setUserType] = useState(customerType)

  const onSubmit = async ({
    firstname,
    lastname,
    email,
    password,
  }, f) => {
    let res = await api.post(
      "users",
      {
        userType,
        firstname,
        lastname,
        email
      },
      { password }
    );
    console.log("..r", res);
    if (res.error) {
      f.setFieldError(res.field, res.error)
      return
    }
    if (res.user) {
      if (res.token) document.cookie = `token=${res.token}`;
      dispatch(setUser(res.user));
      let dashboardRoute;
      switch (userType) {
        case customerType:
          dashboardRoute = '/userdashboard'
          break
        case agentType:
          dashboardRoute = '/dashboard'
          break
        default:
          dashboardRoute = '/userdashboard'
      }
      console.log(dashboardRoute)
      history.push(dashboardRoute)
    }
  };

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
                <Link to="https://google.com" title="google">
                  <img
                    src={Google}
                    width="200"
                    alt="google logo png webinar optimizing htmlFor success google business webinar"
                  />
                </Link>
                Sign Up With Google
              </button>
            </div>
            <div className="alt alt2">
              <button>
                <Link to="https://facebook.com" title="facebook">
                  <img src={Facebook} width="200" alt="facebook" />
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
            onSubmit={onSubmit}
          >
            <Form>
              <RadioGroup
                options={userTypes}
                title='Select a user type'
                checked={userType}
                onChange={setUserType}
                name='userType'
              />
              <div className="row">
                <div className="formGroup">
                  <label htmlFor="firstname">First Name</label>
                  <Field
                    id="firstNameField"
                    type="text"
                    name="firstname"
                    className="form-control"
                  />
                  <ErrorMessage name="firstname" component="div" />
                </div>
                <div className="formGroup">
                  <label htmlFor="lastname">Last Name</label>
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
                <label htmlFor="emailaddress">Email Address</label>
                <Field
                  id="emailField"
                  type="email"
                  name="email"
                  className="form-control"
                />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formGroup">
                <label htmlFor="password">Password</label>
                <Field
                  id="passwordField"
                  type="password"
                  name="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="password"
                />
              </div>
              <div className="formGroup">
                <label htmlFor="confirm_password">
                  Confirm Password
                </label>
                <Field
                  id="passwordField"
                  type="password"
                  name="confirm_password"
                  className="form-control"
                />
                <ErrorMessage
                  name="confirm_password"
                  component="confirm_password"
                />
              </div>

              <div className="condition">
                <input type="checkbox" name="" id="" />
                <label htmlFor="condition">
                  I agree to the platform's
                  <a href="/">Terms Of Services</a>
                  and
                  <a href="/">Privacy And Policy</a>
                </label>
              </div>

              <div className="signsub">
                <input
                  id="signUpButton"
                  type="submit"
                  value="Register"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Signup;
