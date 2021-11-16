import React, {useState, useEffect} from "react";
import FlightTicket from "../../components/FlightTicket";
import Services from "../../components/Services";
import { api } from "../../utils/api";
import "./FlightPage.css";

function FlightPage() {
  let error
  // roundTrip option
  let [roundTrip, setRoundTrip] = useState(false)

  let [items, setItems] = useState([])
  let [adults, setAdults] = useState([])
  // departure date
  let [depDate, setDepDate] = useState('')
  // return date
  let [retDate, setRetDate] = useState('')

  let [origin, setOrigin] = useState('')
  let [destination, setDestination] = useState('')

  const getFlights = async() => {
    console.log('getting')
    console.log(origin)
    console.log(destination)
    let _depDate = new Date(depDate).toISOString().slice(0, -5)
    let inbound
    let outbound = {
      date: _depDate,
      destination,
      origin
    }
    if (roundTrip) {
      let _retDate = new Date(retDate).toISOString().slice(0, -5)
      inbound = {
        date: _retDate,
        detination: origin,
        origin: destination
      }
    }
    let passengers = {
        'ADT': adults
    }
    let arg = JSON.stringify({ outbound, inbound, passengers })
    let res = await api.get(`flights?req=${arg}`)
    if (res.error) {
      error = true
      console.log(res.error, error)
      return [{}]
    }
    let res_items = res.items

    let itns = []

    let id = 0
    res_items.forEach(itn => {
      let store_itn = {id}
      itn.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((option)=>{
        option.FlightSegment.forEach(async(segment)=>{
          let arrPort = segment.ArrivalAirport.LocationCode
          let arrPortRes = await api.get(`/sabre/airport/code?q=${arrPort}`)
          store_itn.arrPort = arrPortRes.name

          let depPort = segment.DepartureAirport.LocationCode
          let depPortRes = await api.get(`/sabre/airport/code?q=${depPort}`)
          store_itn.depPort = depPortRes.name

          store_itn.depDate = segment.DepartureDateTime
          store_itn.arrDate = segment.ArrivalDateTime
        })
      })
      const fare = itn.AirItineraryPricingInfo[0].ItinTotalFare
      store_itn.fare = fare.TotalFare.Amount
      store_itn.curr = fare.TotalFare.CurrencyCode
      itns.push(store_itn)
      id++
    })

    return itns
  }

  useEffect(()=>{
    if (!(origin && destination && depDate)) return

    async function get(){
      let _itns = await getFlights()
      setItems(_itns)
    }

    get()
  }, [depDate, origin, destination])

  return (
    <div>
      <FlightTicket
        roundTrip={roundTrip}
        setRoundTrip={setRoundTrip}
        setRetDate={setRetDate}
        setDepDate={setDepDate}
        setOrigin={setOrigin}
        setAdults={setAdults}
        setDestination={setDestination}
      />
      {
        items.map((item) => (
          <div
            key={item.id}
          >
            <p>departure airport: {item.depPort}</p>
            <p>departure date: {item.depDate}</p>
            <br />
            <p>arrival airport: {item.arrPort}</p>
            <p>arrival date: {item.arrDate}</p>
            <p>price: {item.fare} {item.curr}</p>
            <p>.</p>
            <p>.</p>
          </div>
        ))
      }
      <Services />
    </div>
  );
}

export default FlightPage;
