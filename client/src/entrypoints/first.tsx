/**
 * In webpack terminology the 'entry point'
 * of the First SPA.
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './index.scss';
import { ComponentA, ComponentB, Home } from '../components/';
import { Overview } from "../components/Overview";
import * as SPAs from "../../config/spa.config";

ReactDOM.render(
  <Router>
    <Helmet title={SPAs.appTitle} />
    <div style={{ textAlign: "center", marginTop: "2rem", marginBottom: "3rem" }}>
          <h2>Welcome to {SPAs.appTitle}</h2>
    </div>
    <Switch>
      <Route exact path="/" component={Overview} />
      <Route path="/a" component={ComponentA} />
      <Route path="/b" component={ComponentB} />
      <Route path="/home" component={Home} />
      <Route component={Overview} />
    </Switch>
  </Router>,
  document.getElementById("react-root")
);
