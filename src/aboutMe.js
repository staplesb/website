import React from "react";
import Resume from "./assets/BrentStaples.pdf";

function AboutMe() {
  return (
    <div className="container border-bottom">
      <div className="row my-auto justify-content-center">
        <div className="col-11">
          <div className="card flex-md-row d-inline-block my-3 mx-3">
            <div className="card-header text-center">
              <h2>About Me</h2>
            </div>
            <div className="card-body">
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
            </div>
            <div className="card-footer text-center">
              <a className="text-white" href={Resume} target="_blank">
                <button className="btn-lg btn-dark">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
        <div className="col-10">
          <div className="row">
            <div className="card-deck">
              <div className="card my-3">
                <div className="card-header text-center">
                  <h2>Education</h2>
                </div>
                <div className="card-body" style={{ margin: 0 }}>
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
                </div>
              </div>
              <div className="card my-3">
                <div className="card-header text-center">
                  <h2>Current Projects</h2>
                </div>
                <div className="card-body">
                  <p>
                    I am currently working on several web apps developed using
                    React. I am also furthering my knowledge of backend and
                    cloud technologies to support these apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
