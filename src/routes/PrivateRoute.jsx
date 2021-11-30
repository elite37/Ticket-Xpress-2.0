import React from "react";
import { Redirect, Route } from "react-router";
import { getAccessToken } from "../utils";

const PrivateRoute = ({ component: Component, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) =>
        getAccessToken() ? <Component {...props} /> : <Redirect to='/signin' />
      }
    />
  );
};

export default PrivateRoute;
