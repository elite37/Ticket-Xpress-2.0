import Date from "./Date";
import s from "./.module.css";
import Itns from './Itns.jsx'
import f from './f.json'

import { useSelector, useDispatch } from "react-redux";
import {
  roundTrip,
  origin,
  destination,
  depDate,
  retDate,
} from "$state/slices/flight";
import {
  flighttypes,
  flighttype,
  optionCheckbox,
  flightform__conn,
  flightform,
} from "../.module.css";
import {api} from '$utils'
import {HiSwitchVertical} from "react-icons/hi"
import Location from "./Location";
import Passengers from "./Passengers";
import FlightClasses from "./FlightClasses";
import { useEffect, useState } from "react";

export default () => {
  const flight = useSelector((s) => s.flight);
  const [itns, setItns] = useState(f)
  const mode = useSelector(s => s.book.mode)
  const dispatch = useDispatch();

  const getFlights = async () => {
    if (!(flight.origin && flight.destination && flight.depDate)) return
    const data = {legs: []}
    data.legs.push({
      date: `${flight.depDate}T00:00:00`,
      origin: flight.origin,
      destination: flight.destination,
      class: flight.flightClass
    })
    if (flight.roundTrip) {
      data.legs.push({
        date: `${flight.retDate}T00:00:00`,
        origin: flight.destination,
        destination: flight.origin,
        class: flight.flightClass,
      })
    }
    data.passengers = flight.passengers
    
    const arg = JSON.stringify(data)
    const res = await api.get(`flights?q=${arg}`)
    console.log(res)

    if (res.error) {
      return
    }

    if (!res.items || !Array.isArray(res.items)) return
    
    let res_items = res.items;

    let _itns = [];

    let id = 0;
    res_items.forEach((itn) => {
      let store_itn = { id, legs: [] };
      itn.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach(
        (option) => {
          let leg = {}
          option.FlightSegment.forEach(async (segment) => {
            let arrPort = segment.ArrivalAirport.LocationCode;
            let arrPortRes = await api.get(`/sabre/airport/code?q=${arrPort}`);
            leg.arrPort = arrPortRes.name;

            let depPort = segment.DepartureAirport.LocationCode;
            let depPortRes = await api.get(`/sabre/airport/code?q=${depPort}`);
            leg.depPort = depPortRes.name;

            leg.depDate = segment.DepartureDateTime;
            leg.arrDate = segment.ArrivalDateTime;
            store_itn.legs.push(leg)
          });
        }
      );
      const fare = itn.AirItineraryPricingInfo[0].ItinTotalFare;
      store_itn.fare = fare.TotalFare.Amount;
      store_itn.curr = fare.TotalFare.CurrencyCode;
      
    /*
      const penalties = {};
      itn.AirItineraryPricingInfo.forEach((pricing) => {
        pricing.PTC_FareBreakdowns.PTC_FareBreakdown.forEach((breakDown) => {
          breakDown.PassengerFare.PenaltiesInfo.Penalty.forEach((penalty) => {
            if (!penalties[penalty.Type]) {
              penalties[penalty.Type] = {
                applicability: penalty.Applicability,
                changeable: penalty.Changeable,
                refundable: penalty.Refundable,
                amount: penalty.Amount,
              };
            }
          });
        });
      });

      if (penalties.Exchange && penalties.Exchange.changeable) {
        store_itn.exchange = `Exchangeable for ${penalties.Exchange.amount}`;
      } else {
        store_itn.exchange = "Can't be exchanged";
      }

      if (penalties.Refund && penalties.Refund.refundable) {
        store_itn.refund = "Refundable";
      } else {
        store_itn.refund = "Can't be refunded";
      }
    */
      console.log(store_itn)
      _itns.push(store_itn);
      id++;
    });

    setItns(_itns);
  }

  const switchOriginDestination = () => {
    dispatch(origin(flight.destination))
    dispatch(destination(flight.origin));
  }

  const select = async () => {
    mode === 'Air' ? await getFlights() : null
  }

  useEffect(()=>{
    select()
  }, [flight])

  return (
    <div className={`${s.div}`}>
      <div className={`${s.options}`}>
        <div className={`${flighttypes}`}>
          <div className={`${flighttype}`}>
            <input
              className={`${optionCheckbox}`}
              onChange={() => dispatch(roundTrip())}
              type="checkbox"
            />
            Round Trip
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            rowGap: ".3rem",
          }}
        >
          <FlightClasses />
          <Passengers />
        </div>
        <div action="" className={`${flightform}`}>
          <div className={`${flightform__conn}`}>
            <Location
              type="text"
              id="origin"
              label="Departure City"
              onSelect={(value) => dispatch(origin(value))}
            />
            {/* <div onClick={switchOriginDestination}>
              <HiSwitchVertical />
            </div> */}
            <Location
              type="text"
              label="Arrival City"
              id="destination"
              onSelect={(value) => dispatch(destination(value))}
            />
            <Date
              label="Leaving on"
              onChange={(value) => dispatch(depDate(value))}
            />
            {flight.roundTrip && (
              <Date
                label="Returning on"
                onChange={(value) => dispatch(retDate(value))}
              />
            )}
          </div>
        </div>
      </div>
      <Itns itns={itns}/>
    </div>
  );
};
