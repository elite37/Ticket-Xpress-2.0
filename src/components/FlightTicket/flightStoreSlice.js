import { createSlice } from "@reduxjs/toolkit";

export const flightSlice = createSlice({
  name: "flight",
  initialState: {
    roundTrip: false,
    flightClass: "F",
    origin: "",
    destination: "",
    depDate: "",
    retDate: "",
    passengers: {},
  },
  reducers: {
    flightClass: (state, action) => {
      state.flightClass = action.payload;
    },
    passengers: (state, action) => {
      state.passengers[action.payload.attr] = action.payload.value;
    },
    roundTrip: (state) => {
      state.roundTrip = !state.roundTrip;
    },
    depDate: (state, action) => {
      state.depDate = action.payload;
    },
    retDate: (state, action) => {
      state.retDate = action.payload;
    },
    origin: (state, action) => {
      state.origin = action.payload;
    },
    destination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const {
  flightClass,
  passengers,
  roundTrip,
  destination,
  origin,
  depDate,
  retDate,
} = flightSlice.actions;

export default flightSlice.reducer;
