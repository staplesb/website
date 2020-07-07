import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../home";
import AboutMe from "../aboutMe";
import Projects from "../projects";
import ContactMe from "../contactMe";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
              <li className="nav-item link mx-3">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item link mx-3">
                <Link className="nav-link" to="/aboutme">
                  About Me
                </Link>
              </li>
              <li className="nav-item link mx-3">
                <Link className="nav-link" to="/projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item link mx-3">
                <Link className="nav-link" to="/contactme">
                  Contact Me
                </Link>
              </li>
            </ul>
          </nav>
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
      </div>
    );
  }
}

export default Navigation;
