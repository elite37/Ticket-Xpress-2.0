import React from "react";
import "./AboutComponent.css";

function AboutComponent() {
  return (
    <section className='About__section'>
      <div className='About__Wrapper'>
        <div className='About__ticket'>
          <h3 className='About__header'>ABOUT TICKET XPRESS</h3>
          <p className='first-paragraph'>
            Cheap Flights,Train and Affordable Bus Tickets.
          </p>
        </div>
        <div className='About__Text'>
          <p className='second-paragraph'>
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
