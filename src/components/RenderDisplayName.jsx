import React, { Component } from "react";
class RenderDisplayName extends Component {
  //   constructor(props) {
  //     super(props);
  //     // this.state = {
  //     //   name: props.name,
  //     // };
  //   }
  shouldComponentUpdate(prevProps, prevState) {
    if (prevProps.name === this.props.name) return false;
    else return true;
  }
  render() {
    console.log("...Inside Render Display Name");
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

export default RenderDisplayName;
