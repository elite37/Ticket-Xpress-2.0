import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Flight from "../../components/Flight";
import FlightTicket from "../../components/FlightTicket";
import Services from "../../components/Services";
import { api } from "../../utils/api";
import "./FlightPage.css";

export default function _() {
  let [items, setItems] = useState([]);

  const flightState = useSelector((state) => state.flight);

  let error;

  const getFlights = async () => {
    console.log(flightState.depDate);
    let _depDate = new Date(flightState.depDate).toISOString().slice(0, -5);
    let inbound;
    let outbound = {
      date: _depDate,
      destination: flightState.destination,
      origin: flightState.origin,
    };
    if (flightState.roundTrip) {
      let _retDate = new Date(flightState.retDate).toISOString().slice(0, -5);
      inbound = {
        date: _retDate,
        detination: flightState.origin,
        origin: flightState.destination,
      };
    }
    let passengers = flightState.passengers;
    let arg = JSON.stringify({ outbound, inbound, passengers });
    let res = await api.get(`flights?req=${arg}`);
    if (res.error) {
      error = true;
      console.log(res.error, error);
      return [{}];
    }
    let res_items = res.items;

    let itns = [];

    let id = 0;
    res_items.forEach((itn) => {
      let store_itn = { id };
      itn.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach(
        (option) => {
          option.FlightSegment.forEach(async (segment) => {
            let arrPort = segment.ArrivalAirport.LocationCode;
            let arrPortRes = await api.get(`/sabre/airport/code?q=${arrPort}`);
            store_itn.arrPort = arrPortRes.name;

            let depPort = segment.DepartureAirport.LocationCode;
            let depPortRes = await api.get(`/sabre/airport/code?q=${depPort}`);
            store_itn.depPort = depPortRes.name;

            store_itn.depDate = segment.DepartureDateTime;
            store_itn.arrDate = segment.ArrivalDateTime;
          });
        }
      );
      const fare = itn.AirItineraryPricingInfo[0].ItinTotalFare;
      store_itn.fare = fare.TotalFare.Amount;
      store_itn.curr = fare.TotalFare.CurrencyCode;
      itns.push(store_itn);
      id++;
    });

    return itns;
  };

  useEffect(() => {
    console.log('rerun')
    if (!(flightState.origin && flightState.destination && flightState.depDate)) return;

    async function get() {
      let _itns = await getFlights();
      setItems(_itns);
    }

    get();
  }, [flightState]);

  return (
    <div>
      <FlightTicket />
      {items.map((item) => (
        <Flight
          key={item.id}
          itn={item}
        />
      ))}
      <Services />
    </div>
  );
}
