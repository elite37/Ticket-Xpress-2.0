import React from "react";
import ServiceCard from "../ServiceCard";
import trainIcon from "../../assets/images/servicesimages/Group 48.png";
import flightIcon from "../../assets/images/servicesimages/Group 51 1 (1).png";
import busIcon from "../../assets/images/servicesimages/Group 50.png";
import customIcon from "../../assets/images/servicesimages/Group 49.png";
import "./Services.css";

function Services() {
  return (
    <section className='services'>
      <div className='services__container'>
        <div className='services__top'>
          <h4>Our Services</h4>
          <h1>We Offer Best Services</h1>
        </div>
        <div className='services__bottom'>
          <ServiceCard
            serviceTitle='Book Train'
            serviceBody='You can book your train ticket to travel around Nigeria.'
            serviceIcon={trainIcon}
          />
          <ServiceCard
            serviceTitle='Best Flights'
            serviceBody='You can book a flight with us to travel to yout vaction'
            serviceIcon={flightIcon}
          />
          <ServiceCard
            serviceTitle='Book Bus'
            serviceBody='You can book your bus tickets with us htmlFor your trip.'
            serviceIcon={busIcon}
          />
          <ServiceCard
            serviceTitle='Customization'
            serviceBody='You can make a customize request to book all your tip.'
            serviceIcon={customIcon}
          />
        </div>
      </div>
    </section>
  );
}

export default Services;
