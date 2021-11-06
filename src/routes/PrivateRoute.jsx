import React from "react";
import { Redirect, Route } from "react-router";
import { isLogin } from "../utils";

const PrivateRoute = ({ component: Component, role, ...others }) => {
  return (
    <Route
      {...others}
      render={(props) =>
        isLogin() ? (
          <Component role={role} {...props} />
        ) : (
          <Redirect to='/signin' />
        )
      }
    />
  );
};

export default PrivateRoute;
