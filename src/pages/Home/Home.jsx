import React from "react";
import useTitle from "../../hooks/useTItle/useTitle";
import "./Home.css";

function Home() {
  // A hook for setting the page title
  useTitle("Home Page");
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
