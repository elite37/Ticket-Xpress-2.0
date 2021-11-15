import "./App.css";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";
import { isLogin } from "./utils";
// import UserDashboard from "./pages/UserDashboard/UserDashboard";

// Lazy load pages here for optimization
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

function App() {
  return (
    <div className='App'>
      <Router>
        {!isLogin() && <Navbar />}
        <Suspense fallback={<Spinner />}>
          <Switch>
            <PublicRoute exact path='/' component={Home} />
            <PublicRoute path='/about' component={About} />
            <PublicRoute path='/bus' component={BusPage} />
            <PublicRoute path='/flight' component={FlightPage} />
            <PublicRoute path='/train' component={TrainPage} />
            <PublicRoute path='/contact' component={Contact} />
            <PublicRoute path='/tickets' component={Tickets} />
            <PublicRoute path='/signin' restricted component={SignIn} />
            <PublicRoute path='/signup' restricted component={SignUp} />
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
        {!isLogin() && <Footer />}
      </Router>
    </div>
  );
}

export default App;
