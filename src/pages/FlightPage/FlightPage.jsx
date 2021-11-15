import React, {useState, useEffect} from "react";
import FlightTicket from "../../components/FlightTicket";
import Services from "../../components/Services";
import { api } from "../../utils/api";
import "./FlightPage.css";
function FlightPage() {
  let [items, setItems] = useState([])
  let [depDate, setDepDate] = useState('')
  let [origin, setOrigin] = useState('')
  let [destination, setDestination] = useState('')

  // console.log(items)

  const getFlights = async() => {
    console.log('getting')
    let outbound = {
      date: '2021-11-21T00:00:00',
      destination: 'LAX',
      origin: 'NYC'
    }
    let passengers = {
        'ADT': 1
    }
    let arg = JSON.stringify({ outbound, passengers })
    let res = await api.get(`flights?req=${arg}`)
    let res_items = res.items

    let itns = []

    res_items.forEach(itn => {
      let store_itn = {}
      itn.AirItinerary.OriginDestinationOptions.OriginDestinationOption.forEach((option)=>{
        option.FlightSegment.forEach((segment)=>{
          store_itn.depDate = segment.DepartureDateTime
          store_itn.arrDate = segment.ArrivalDateTime
        })
      })
      const fare = itn.AirItineraryPricingInfo[0].ItinTotalFare
      store_itn.fare = fare.TotalFare.Amount
      store_itn.curr = fare.TotalFare.CurrencyCode
      itns.push(store_itn)
    })

    return itns
  }

  useEffect(()=>{
    async function get(){
      let _itns = await getFlights()
      setItems(_itns)
      // console.log('..i', items)
    }
    // get()
    // console.log(origin)
    // console.log(destination)
    // console.log(depDate)
  }, [depDate, origin, destination, items])

  return (
    <div>
      <FlightTicket
        setDepDate={setDepDate}
        setOrigin={setOrigin}
        setDestination={setDestination}
      />
      {
        items.map((item) => (
          <div>
            <p>departure date: {item.depDate}</p>
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
