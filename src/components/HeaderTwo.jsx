import React, { Component } from "react";
class HeaderTwo extends Component {
  // state = {};
  render() {
    return (
      <div>
        <h2>
          Welcome to {this.props.user} {this.props.dept} in Header Two Component
        </h2>
        <button onClick={this.props.clicked}>Click on Me</button>
      </div>
    );
  }
}

export default HeaderTwo;
