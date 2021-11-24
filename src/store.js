import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./components/FlightTicket/flightStoreSlice";

export default configureStore({
  reducer: {
    flight: flightReducer,
  },
});
