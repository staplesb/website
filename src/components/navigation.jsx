import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navi = (props) => {
  const [collapsed, setCollaped] = useState(true);
  const toggleNavbar = () => setCollaped(!collapsed);

  return (
    <div className="navi">
      <nav className="navbar navbar-dark bg-dark static-top">
        <NavbarBrand className="mr-auto text-white">
          <h4 style={{ margin: "0" }}>Brent Staples</h4>{" "}
          <p style={{ margin: "0" }}>
            <sup>B.S. in Neuroscience</sup>
          </p>
        </NavbarBrand>
        <button onClick={toggleNavbar} className="navbar-toggler mr-2">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar color="dark">
            <NavItem>
              <Link to="/" onClick={toggleNavbar} className="nav-link">
                About Me
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/projects" onClick={toggleNavbar} className="nav-link">
                Projects
              </Link>
            </NavItem>
            <NavItem>
              <a
                href="mailto:brent@brentstaples.com"
                onClick={toggleNavbar}
                className="nav-link"
              >
                Contact Me
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    </div>
  );
};

export default Navi;
