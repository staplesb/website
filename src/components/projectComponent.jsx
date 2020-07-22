import React, { Component } from "react";
import {
  Button,
  Card,
  CardImg,
  CardHeader,
  CardBody,
  CardFooter,
} from "reactstrap";

class ProjectComponent extends Component {
  render() {
    return (
      <Card className="mb-4 mx-auto d-inline-block">
        <CardHeader>
          <h2>{this.props.header}</h2>
        </CardHeader>
        <CardBody>
          <img
            className="card-img-top mb-3"
            src={this.props.src}
            alt={this.props.header}
          />
          <div className="border-top" />
          <p className="mt-2">{this.props.txt}</p>
        </CardBody>
        <CardFooter className="text-center">
          <a className="text-white" href={this.props.href} target="_blank">
            <Button color="secondary">Source Code</Button>
          </a>
        </CardFooter>
      </Card>
    );
  }
}

export default ProjectComponent;
