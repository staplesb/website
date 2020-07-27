import React from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  Label,
  Input,
  FormText,
  Jumbotron,
  FormFeedback,
  Col,
  Row,
} from "reactstrap";

function ContactMe() {
  return (
    <Container className="contactme">
      <Row className="justify-content-center">
        <Col md="7">
          <Jumbotron className="form p-3 text-center">
            <Form>
              <FormGroup className="was-validated">
                <Label for="emailID" hidden>
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  id="emailID"
                  placeholder="Enter email"
                  required
                />
                <FormFeedback onInvalid>
                  Please enter a valid email address.
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label for="textID" hidden>
                  Message
                </Label>
                <Input
                  style={{ height: "300px" }}
                  type="textarea"
                  name="text"
                  id="textID"
                  placeholder="Enter message"
                  required
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactMe;
