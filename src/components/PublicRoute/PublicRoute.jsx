import React from "react";
import { Route, Redirect } from "react-router-dom";
import { Layout } from "../Layout";
const PublicRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => (
        <Layout>
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default PublicRoute;
