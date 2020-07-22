import React from "react";
import { Route, Link } from "react-router-dom";
import AboutMe from "./aboutMe";
import { Container, Jumbotron, Button } from "reactstrap";

function Home() {
  return (
    <Container className="home">
      <Jumbotron className="p-3">
        <p />
        <p className="text-center pb-3">
          With a B.S. in Neuroscience and a strong foundation in Computer
          Science, I will bring a unique perspective to design and
          implementation of applications.
        </p>
        <p className="text-center">
          <Link className="text-white" to="/aboutme">
            <Button color="primary" size="lg">
              Read more
            </Button>
          </Link>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
        </p>
      </Jumbotron>
    </Container>
  );
}

export default Home;
