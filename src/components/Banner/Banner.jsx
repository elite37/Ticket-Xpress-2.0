import React from "react";
// import "./Banner.css";
import heroImage from "../../assets/images/Hero-Image.png";
import { Link } from "react-router-dom";
import Styles from "./Banner.Module.css";

function Banner() {
  return (
    <section id={Styles.heroSection}>
      <div className={Styles.hero_section_container}>
        <div className={Styles.heroText}>
          <div id={Styles.heroText2}>
            <div id={Styles.hero__decore}></div>
            <div>
              <h3 id={Styles.heroLabel}>Best all in one booking platform</h3>
              <h1>Ticket Xpress, your all in one booking ticket.</h1>
            </div>

            <p id={Styles.heroDetails}>
              Our goal is to centralize transport industry, and make ticket
              bookings to your preffered location easily accessible from the
              comfort of your home.
            </p>

            <Link to="/flight" id={Styles.book__Btn}>
              <span>Book</span>
            </Link>
          </div>
        </div>

        <div id={Styles.hero__Img}>
          <img src={heroImage} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
