import React from "react";
import Resume from "./assets/BrentStaples.pdf";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

function AboutMe() {
  return (
    <Container className="aboutme">
      <Row className="justify-content-center">
        <Col md="11">
          <Card className="flex-md-row d-inline-block mb-4">
            <CardHeader className="text-center">
              <h2>About Me</h2>
            </CardHeader>
            <CardBody>
              <p>
                Pursuing my interest in computer science, I have spent the past
                couple years building a foundation in this field. I studied at
                the University of Alabama in Huntsville for two years, and
                during that time, I fulfilled the breadth requirements to pursue
                a masters degree there. I am now self studying technologies that
                interest me.
              </p>
              <p>
                Prior to pursuing a career in software development, I received a
                liberal arts education at Lafayette College and graduated with a
                degree in Neuroscience. This gives me the benefit of having a
                strong basis in the life sciences and a well rounded knowledge
                of writing. As such, I am well suited to interdisciplinary
                projects.
              </p>
            </CardBody>
            <CardFooter className="text-center">
              <a className="text-white" href={Resume} target="_blank">
                <Button color="secondary" size="large">
                  Download Resume
                </Button>
              </a>
            </CardFooter>
          </Card>
          <Row className="justify-content-center">
            <Col md="11">
              <div className="card-deck">
                <Card className="mb-4">
                  <CardHeader className="text-center">
                    <h2>Education</h2>
                  </CardHeader>
                  <CardBody>
                    <p style={{ margin: 0 }}>
                      <b>2013-2017</b>
                    </p>
                    <p style={{ margin: 0 }}>
                      <b>Lafayette College</b>
                    </p>
                    <p>B.S. Neuroscience</p>
                    <p style={{ margin: 0 }}>
                      <b>2017-2019</b>
                    </p>
                    <p style={{ margin: 0 }}>
                      <b>The University of Alabama in Huntsville</b>
                    </p>
                    <p>Computer Science Studies</p>
                  </CardBody>
                </Card>
                <Card className="mb-4">
                  <CardHeader className="text-center">
                    <h2>Current Projects</h2>
                  </CardHeader>
                  <CardBody>
                    <p>
                      I am currently working on several web apps developed using
                      React. I am also furthering my knowledge of backend and
                      cloud technologies to support these apps.
                    </p>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutMe;
