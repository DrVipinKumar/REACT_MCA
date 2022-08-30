import React, { Component } from "react";
import ChangeColorHOC from "./ChangeColorHOC";
import { Name } from "./contextname";
class ChangeColorOnClick extends Component {
  render() {
    return (
      <div>
        <h2 style={{ color: this.props.color }}>
          {this.context}
          {/* <Name.Consumer>{(value) => value}</Name.Consumer> */}
        </h2>
        <button className="btn btn-primary" onClick={this.props.changeColor}>
          Change Color
        </button>
      </div>
    );
  }
}
ChangeColorOnClick.contextType = Name;
export default ChangeColorHOC(ChangeColorOnClick);
