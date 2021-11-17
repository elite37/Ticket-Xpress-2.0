import { createSlice } from "@reduxjs/toolkit";

export const flightSlice = createSlice({
  name: "flight",
  initialState: {
    flightClassesOpen: false,
    passengersOpen: false,
    roundTrip: false,
    flightClass: "F",
    origin: "",
    destination: "",
    depDate: "",
    retDate: "",
    passengers: {},
  },
  reducers: {
    flightClassesOpen: (state) => {
      state.flightClassesOpen = !state.flightClassesOpen;
    },
    passengersOpen: (state) => {
      state.passengersOpen = !state.passengersOpen;
    },
    flightClass: (state, action) => {
      state.flightClass = action.value;
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
  flightClassesOpen,
  passengers,
  passengersOpen,
  roundTrip,
  destination,
  origin,
  depDate,
  retDate,
} = flightSlice.actions;

export default flightSlice.reducer;
