import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./context";
import reducer, { initialState } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider initialState={initialState} reducer={reducer}>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
