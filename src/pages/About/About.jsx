import React from "react";
import useTitle from "../../hooks/useTItle/useTitle";
import "./About.css";

function About() {
  useTitle("About Page");
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
