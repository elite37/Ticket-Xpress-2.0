import React from "react";
import { Redirect, Route } from "react-router";
import { getAccessToken, isLogin } from "../utils";
const PublicRoute = ({ component: Component, restricted, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) =>
        getAccessToken() && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
