import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

class Footer extends Component {
  state = {};
  render() {
    return (
      <Container fluid={true} className="p-1 bg-dark">
        <div className="text-center text-white my-4">
          Made by Brent Staples with React. Deployed using AWS Amplify.
        </div>
      </Container>
    );
  }
}

export default Footer;
