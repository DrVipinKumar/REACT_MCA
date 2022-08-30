import React, { Component } from "react";
import ChildC from "./ChildC";
class ChildB extends Component {
  state = {};
  render() {
    return (
      <div>
        <ChildC />
      </div>
    );
  }
}

export default ChildB;
