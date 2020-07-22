import React, { useState } from "react";

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
      <nav className="navbar navbar-dark bg-dark">
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
              <NavLink href="/" className="text-white">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutme" className="text-white">
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects" className="text-white">
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contactme" className="text-white">
                Contact Me
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </nav>
    </div>
  );
};

export default Navi;
