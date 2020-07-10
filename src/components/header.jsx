import React, { Component } from "react";
import keyboard from "./../assets/keyboard.jpg";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <header>
          <div className="card-dark text-center">
            <div
              className="card-title card-img-overlay text-white"
              style={{ height: 160 }}
            >
              <h2 className="mt-3">Brent Staples</h2>
              <p>B.S. in Neuroscience</p>
            </div>
          </div>
          <img
            className="card-img-top"
            src={keyboard}
            alt="keyboard.jpg"
            width="auto"
            height="160"
          />
        </header>
      </div>
    );
  }
}

export default Header;
