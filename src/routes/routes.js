import React  from "react";
import { Switch, Redirect } from "react-router-dom";
// import { PrivateRoute } from "../components/PrivateRoute";
import { PublicRoute } from "../components/PublicRoute";

import Home from '../components/Home';
// import Landing from "../components/Landing";
import Services from '../components/Services';
import Techonologies from '../components/Technologies';
import Company from '../components/Company';
import Connect from '../components/Connect';
import Career from '../components/Career';
export const routes = (
   <Switch>
      <PublicRoute exact path="/" component={Home} />
      {/* <PublicRoute exact path="/home" component={Home} /> */}
      <PublicRoute exact path="/services" component={Services}/>
      <PublicRoute exact path="/technologies" component={Techonologies} />
      <PublicRoute exact path="/company" component={Company}/>
      <PublicRoute exact path="/Career" component={Career}/>
      <PublicRoute exact path="/connect" component={Connect}/>
 {/* <PrivateRoute exact path="/createWorkFlow" component={CreateWorkFlow} /> */}
      <Redirect to="/404" />
    </Switch>
);
