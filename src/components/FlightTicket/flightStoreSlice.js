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
      state.depDate = action.value;
    },
    retDate: (state, action) => {
      state.retDate = action.value;
    },
    origin: (state, action) => {
      state.origin = action.value;
    },
    destination: (state, action) => {
      state.destination = action.value;
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
