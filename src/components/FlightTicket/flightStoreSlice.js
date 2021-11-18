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
    passengers: {
      'ADT': 1
    },
  },
  reducers: {
    flightClass: (state, action) => {
      state.flightClass = action.value;
    },
    passengers: (state, action) => {
      let value = Number(action.payload.value);
      if (isNaN(value)) value = 0
      state.passengers[action.payload.attr] = value;
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
      state.origin = action.payload.value;
    },
    destination: (state, action) => {
      state.destination = action.payload.value;
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
