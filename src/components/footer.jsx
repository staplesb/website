import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <footer>
          <div className="text-center my-4">
            Made by Brent Staples with React. Deployed using AWS Amplify.
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
