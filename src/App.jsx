import "./App.css";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { getAccessToken } from "./utils";
// import UserDashboard from "./pages/UserDashboard/UserDashboard";

// Lazy load pages here htmlFor optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Tickets = lazy(() => import("./pages/MyTicketsPage"));
const SignIn = lazy(() => import("./pages/Signin"));
const SignUp = lazy(() => import("./pages/Signup"));
const Contact = lazy(() => import("./pages/Contact"));
const BusPage = lazy(() => import("./pages/BusPage"));
const TrainPage = lazy(() => import("./pages/TrainPage"));
const FlightPage = lazy(() => import("./pages/FlightPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const MyTripPage = lazy(() => import("./pages/MyTripPage"));
const CustomerInformation = lazy(() => import("./pages/CustomerInformation"));

const PaymentPage = lazy(() => import("./pages/PaymentPage"));

function App() {
  return (
    <div className='App'>
      <Router>
        {!getAccessToken() && <Navbar />}
        <Suspense fallback={<Spinner />}>
          <Switch>

            <PublicRoute exact path="/" component={Home} />
            <PublicRoute path="/about" component={About} />
            <PublicRoute path="/bus" component={BusPage} />
            <PublicRoute path="/flight" component={FlightPage} />
            <PublicRoute path="/train" component={TrainPage} />
            <PublicRoute path="/contact" component={Contact} />
            <PublicRoute path="/tickets" component={Tickets} />
            <PublicRoute path="/signin" restricted component={SignIn} />
            <PublicRoute path="/signup" restricted component={SignUp} />
            <PublicRoute path="/trip" component={MyTripPage} />
            <PublicRoute path="/payment" component={PaymentPage} />
            <PublicRoute path="/info" component={CustomerInformation} />
            <PrivateRoute
              path='/dashboard'
              role='admin'
              component={Dashboard}
            />
            <PrivateRoute
              path='/userdashboard'
              role='user'
              component={UserDashboard}
            />
          </Switch>
        </Suspense>
        {!getAccessToken() && <Footer />}
      </Router>
    </div>
  );
}

export default App;
