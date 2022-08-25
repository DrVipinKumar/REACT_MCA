import React, { Component } from "react";
class DisplayName extends Component {
  // componentWillUnmount() {
  //   console.log("Inside Component Will UnMount...");
  // }
  componentDidMount() {
    if (/\d/.test(this.props.name) === true) {
      throw new Error("This is not vaid name");
    }
  }
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default DisplayName;
