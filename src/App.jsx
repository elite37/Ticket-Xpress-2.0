import "./App.css";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BusPage from "./pages/BusPage";
import FlightPage from "./pages/FlightPage";
import TrainPage from "./pages/TrainPage";
import Contact from "./pages/Contact/Contact";

// Lazy load pages here for optimization
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

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
          </Switch>
        </Suspense>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
