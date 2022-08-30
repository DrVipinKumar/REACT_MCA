import React, { Component } from "react";
import { Name } from "./contextname";
class ChildC extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2>
          {this.context.name}={this.context.course}
          {this.context.onDisplay()}
          {/* <Name.Consumer>{(value) => value.onDisplay()}</Name.Consumer> */}
        </h2>
      </div>
    );
  }
}
ChildC.contextType = Name;
export default ChildC;
