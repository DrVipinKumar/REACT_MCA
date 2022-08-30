import React, { Component } from "react";
import ChildB from "./ChildB";
class ChildA extends Component {
  state = {};
  render() {
    return (
      <div>
        <ChildB />
      </div>
    );
  }
}

export default ChildA;
