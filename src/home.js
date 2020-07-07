import React from "react";
import { Route, Link } from "react-router-dom";
import AboutMe from "./aboutMe";

function Home() {
  return (
    <div>
      <div className="jumbotron border-bottom">
        <div className="col-md-5 p-lg-5 mx-auto">
          <p className="text-center">
            With a B.S. in Neuroscience and the variety of Computer Science
            courses I have taken, I hope to bring a unique perspective to the
            design and implementation of applications.
          </p>
          <p className="text-center">
            <button className="btn-lg btn-primary">
              <Link className="text-white" to="/aboutme">
                Read more
              </Link>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
