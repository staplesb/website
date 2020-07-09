import React, { Component } from "react";
import keyboard from "./../assets/keyboard.jpg";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <div className="card-dark" width="100%">
            <img
              className="card-img-top"
              src={keyboard}
              alt="keyboard.jpg"
              width="100%"
              height="auto"
            />
            <div className="card-img-overlay my-auto text-white">
              <h2 className="card-title ml-4 mb-0">Brent Staples</h2>
              <p className="card-text ml-5">B.S. in Neuroscience</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
