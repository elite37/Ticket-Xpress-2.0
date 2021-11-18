import React from "react";
import { Redirect, Route } from "react-router";
import { isLogin } from "../utils";

const PublicRoute = ({ component: Component, restricted, ...others }) => {  
  return (
    <Route
      {...others}
      render={(props) =>
        isLogin() && restricted ? (
          <Redirect to='/dashboard' />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
