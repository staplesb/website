import React, { Component } from "react";

class ProjectComponent extends Component {
  render() {
    return (
      <div>
        <div className="card-secondary my-3 mx-auto d-inline-block">
          <div className="card-header">
            <h2>{this.props.header}</h2>
          </div>
          <div className="card-body">
            <img
              className="card-img-top my-2"
              src={this.props.src}
              alt={this.props.header}
            />
            <div className="border-top" />
            <p>{this.props.txt}</p>
          </div>
          <div className="card-footer text-center">
            <a className="text-white" href={this.props.href} target="_blank">
              <button className="btn-lg btn-dark m-3">Source Code</button>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectComponent;
