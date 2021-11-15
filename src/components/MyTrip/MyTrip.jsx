import React from "react";
import AddOn from "./AddOn/AddOn";

function MyTrip() {
  let list = [
    {
      title: "Outbound COVID-19 Test Booking(Other States)",
      body: " Not in lagos?  You can still book your outbound Covid-19 done  with Ticket Express anywhere in Nigeria, all our partnered are NCDC approved and accredited.",
      price: "N39,500",
    },
    {
      title: "Inbound COVID-19 Test Booking",
      body: " Not in lagos?  You can still book your outbound Covid-19 done  with Ticket Express anywhere in Nigeria, all our partnered are NCDC approved and accredited.",
      price: "N39,500",
    },
    {
      title: "Outbound COVID-19 Test Booking(Lagos Only)",
      body: " Get comprehensive Covid-19 Travel Insurance cover for 30days to protect against Covid-19 (if diagnosed) up to EUR 90 per day (Max 14) for quarantine, loss or delayed baggage up to EUR 400,lost passport up to EUR 750 and compensation for medical-related expenses up to EUR 30,000.",
      price: "N39,500",
    },

    {
      title: " COVID-19 Travel Insurance",
      body: " Get SMS, WhatsApp and phone calls reminding you of your flight and updates on time and dates.",
      price: "N39,500",
    },

    {
      title: " Flight Reminder",
      body: "Not in lagos?  You can still book your outbound Covid-19 done  with Ticket Express anywhere in Nigeria, all our partnered are NCDC approved and accredited.",
      price: "N39,500",
    },

    {
      title: " Airport lounge",
      body: "Regardless of whether you are traveling for business or leisure,get lounge access to make the most of your airport experience.",
      price: "N39,500",
    },

    {
      title: " Medical Cancellation Refund",
      body: "Get a full refund of airfare and taxes in the event of sudden illness, death or hospitalization of yourself or a close relative, prior to departure.",
      price: "N39,500",
    },

    {
      title: "  Ticket details via SMS and WhatsApp",
      body: "Receive Ticket details via SMS and WhatsApp.",
      price: "N39,500",
    },

    {
      title: " Flexible Travel Dates",
      body: "This add-on gives you one date change to your flight without paying any airline penalty fees. Validity is up to 48 hours prior to departure of the original ticket. If the price of your new ticket is higher, you'll pay the difference",
      price: "N39,500",
    },

    {
      title: "Airline Liquidation Protection",
      body: "Get a full refund if the airline you are flying with liquidated prior to departure.",
      price: "N39,500",
    },

    {
      title: "FREE Travel sim + $5 Top -up",
      body: "Pay less, Talk more! Experience Local rate with global coverage,say goodbye to shocking roaming bills with our Travel sim. Travel sim provides you with a phone number that works in every country in the world, you can make cheap calls, browse at layovers at any destination in the world, no roaming fee, same number everywhere you go, enjoy periodic bonanzas of free calls to anyone and anywhere with Travel sim.",
      price: "N39,500",
    },

    {
      title: "Ticket Express Priority Package",
      body: "With this service, an agent will assist by processing your requests to the airline for wheelchair assistance and extra luggage in question.",
      price: "N39,500",
    },

    {
      title: "Ticket Express Protocol Service",
      body: "Get a full refund if the airline you are flying with liquidated prior to departure.",
      price: "N39,500",
    },

    {
      title: "Round-trip COVID-19 Test Booking",
      body: "Enjoy a discounted price by booking for a round trip covid test service. All our partnered labs used are NCDC approved and accredited. Stay safe,Ticket Express cares.",
      price: "N39,500",
    },
  ];
  return (
    <ul>
      {list.map((addOn) => (
        <li>
          <AddOn title={addOn.title} body={addOn.body} price={addOn.price} />
        </li>
      ))}
    </ul>
  );
}

export default MyTrip;
