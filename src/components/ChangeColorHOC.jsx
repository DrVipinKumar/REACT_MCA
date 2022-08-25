import React, { Component } from "react";

const ChangeColorHOC = (NormalComponent) => {
  class EnhanceComponent extends Component {
    state = { color: "#000000" };
    changeColor = () => {
      const color = "#" + Math.floor(Math.random() * 6177722).toString(16);
      this.setState({
        color,
      });
    };
    render() {
      return (
        <div>
          <NormalComponent
            color={this.state.color}
            changeColor={this.changeColor}
          />
        </div>
      );
    }
  }

  return EnhanceComponent;
};

export default ChangeColorHOC;
