import React, { Component } from "react";
import Navigation from "./navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
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
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contactme">
            <ContactMe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default Routing;
