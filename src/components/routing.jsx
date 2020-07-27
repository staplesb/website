import React, { Component } from "react";
import Navigation from "./navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../home";
import AboutMe from "../aboutMe";
import Projects from "../projects";
import ContactMe from "../contactMe";

class Routing extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Navigation />
        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routing;
