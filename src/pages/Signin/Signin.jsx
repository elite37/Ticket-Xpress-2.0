import React, {useState} from "react";
import { Link, Redirect } from "react-router-dom";
import "./Signin.css";
import RadioGroup from "../../components/UI/RadioGroup";
import { api } from "../../utils/api";
import * as cookie from "cookie";
import { useDispatch } from "react-redux";
import { setUser } from '../../state/slices/user'
import heroImage from "../../assets/images/Hero-Image.png";
import Google from "../../assets/images/signup/google.png";
import Facebook from "../../assets/images/signup/facebook.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const userDashboardRoute = "/userdashboard";
const customerType = "customer";
const agentType = "agent";

const initialValues = {
  email: "",
  password: "",
};

const userTypes = [
  {
    value: customerType,
    text: "Customer",
  },
  {
    value: agentType,
    text: "Agent",
  },
];

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required!"),
  password: Yup.string().required("Password is required"),
});

function Signin() {
  const [dashboardRoute, setDashboardRoute] = useState('')
  const dispatch = useDispatch()
  const [userType, setUserType] = useState(customerType);

  const go = () => {
    switch (userType) {
      case customerType:
        setDashboardRoute(userDashboardRoute);
        break;
      case agentType:
        setDashboardRoute("/dashboard");
        break;
      default:
        setDashboardRoute(userDashboardRoute);
    }
  }

  const onSubmit = async (
    { email, password },
    f
  ) => {
    let res = await api.post(
      "tokens",
      {
        userType,
        email,
      },
      { password }
    );
    console.log("..r", res);
    if (res.error) {
      f.setFieldError(res.field, res.error);
      return;
    }
    if (res.user) {
      dispatch(setUser(res.user))
      if (res.token) {
        document.cookie = `token=${res.token}`
      }
      go()
    }
  };

  return (
    <section className="userform signup">
      {dashboardRoute && <Redirect to={dashboardRoute} />}
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
                    alt="google logo png webinar optimizing htmlFor success google business webinar"
                  />
                </Link>
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

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <RadioGroup
                options={userTypes}
                title="Select a user type"
                checked={userType}
                onChange={setUserType}
                name="userType"
              />
              <div className="formGroup">
                <label htmlFor="emailaddress">Email Address</label>
                <Field id="emailField" name="email" type="email" />
                <ErrorMessage name="email" component="div" />
              </div>
              <div className="formGroup">
                <label htmlFor="lastname">Password</label>
                <Field
                  id="passwordField"
                  name="password"
                  type="password"
                />
                <ErrorMessage name="password" component="div" />
              </div>

              <div className="remember">
                <div className="rememberMe">
                  <input type="checkbox" name="" id="" />
                  <label htmlFor="">Remeber Me</label>
                </div>

                <div className="forgotPass">
                  <a href="/">Forgot Password?</a>
                </div>
              </div>

              <div className="signsub">
                <input
                  id="loginButton"
                  type="submit"
                  value="Login"
                />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default Signin;
