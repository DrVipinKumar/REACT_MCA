import React, { Component } from "react";
import ChangeColorHOC from "./ChangeColorHOC";
class ChangeColorOnHover extends Component {
  render() {
    return (
      <div>
        <h2
          onMouseOver={this.props.changeColor}
          style={{ color: this.props.color }}
        >
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default ChangeColorHOC(ChangeColorOnHover);
