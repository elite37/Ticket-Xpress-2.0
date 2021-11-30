import React from "react";
import Styles from "./AboutComponent.module.css";

function AboutComponent() {
  return (
    <section className={Styles.About__section}>
      <div className={Styles.About__Wrapper}>
        <div className={Styles.__ticket}>
          <h3 className={Styles.About__header}>ABOUT TICKET XPRESS</h3>
          <p className={Styles.first__paragraph}>
            Cheap Flights,Train and Affordable Bus Tickets.
          </p>
        </div>
        <div className={Styles.About__Text}>
          <p className={Styles.second__paragraph}>
            We are a Nigerian travel booking agency with thousands of travellers
            dedicated to rock the travel world. We want our customers to spend
            less time purchasing their travel tickets. ur mission is to save you
            time, stress and keep you safe from Covid-19 virus with our simple
            online travel ticket booking platform.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
