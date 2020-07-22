import React from "react";
import {
  Jumbotron,
  Button,
  Container,
  Card,
  CardImg,
  CardImgOverlay,
  CardBody,
} from "reactstrap";
import Background from "./assets/background.jpg";

function ContactMe() {
  return (
    <Container className="contactme">
      <p className="text-center pt-3">
        <a className="text-white" href="mailto:brent@brentstaples.com">
          <button className="btn-lg">Email</button>
        </a>
      </p>
    </Container>
  );
}

export default ContactMe;
