import React from "react";
import AboutComponent from "../../components/AboutComponent";
import Banner from "../../components/Banner";
import NewsLetter from "../../components/NewsLetter";
import Services from "../../components/Services";
import TopDestinations from "../../components/TopDestinations";
import useTitle from "../../hooks/useTItle/useTitle";
import "./Home.css";

function Home() {
  // A hook for setting the page title
  useTitle("Home Page");
  return (
    <div>
      <Banner />
      <Services />
      <TopDestinations />
      <AboutComponent />
      <NewsLetter />
    </div>
  );
}

export default Home;
