import "./App.css";
import Spinner from "./components/Spinner";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";

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
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
