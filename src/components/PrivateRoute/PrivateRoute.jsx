import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../Layout";

const PrivateRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        // if (localStorage.getItem("user")) {
        return (
          <Layout>
            <Component {...routeProps} />
          </Layout>
        );
        // } else {
        //   return "test";
        // }
      }}
    />
  );
};

export default PrivateRoute;

{
  /* <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: routeProps.location
                }
              }}
            /> */
}
