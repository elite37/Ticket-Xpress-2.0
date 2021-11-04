import "./App.css";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/bus' component={BusPage} />
            <Route path='/flight' component={FlightPage} />
            <Route path='/train' component={TrainPage} />
            <Route path='/contact' component={Contact} />
            <Route path='/tickets' component={Tickets} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
