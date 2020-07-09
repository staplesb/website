import React from "react";
import Resume from "./assets/BrentStaples.pdf";

function AboutMe() {
  return (
    <div className="container text-center">
      <div className="row my-auto justify-content-center border-bottom">
        <div className="card-secondary d-inline-block my-4 mx-3">
          <div className="card-header">
            <h1>About Me</h1>
          </div>
          <div className="card-body">
            <p>
              Having received a liberal arts education and Neuroscience degree,
              I have a strong basis in the life sciences and a well rounded
              knowledge of math and writing. Following my undergraduate degree,
              I have taken two years to pursue my interest in computer science
              and build a strong foundation in Java and C++. It is now my intent
              to further pursue my interest in computer science by seeking a job
              as a software engineer.
            </p>
          </div>
          <div className="card-footer">
            <button className="btn-lg btn-dark">
              <a className="text-white" href={Resume} target="_blank">
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="card-secondary d-inline-block my-4 mx-3">
          <div className="card-header">
            <h1>Education</h1>
          </div>
          <div className="card-body">
            <p>2013-2017 Lafayette College B.S. Neuroscience</p>
            <p>
              2017-2019 The University of Alabama in Huntsville Computer Science
              Studies
            </p>
          </div>
        </div>
        <div className="card-secondary d-inline-block my-4 mx-3">
          <div className="card-header">
            <h1>Current Projects</h1>
          </div>
          <div className="card-body">
            <p>I am currently working on learning React.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
