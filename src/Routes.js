import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";
import NewReservation from "./containers/NewReservation";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/reservations/new" exact component={NewReservation} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;
