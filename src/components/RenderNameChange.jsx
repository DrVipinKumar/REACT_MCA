import React, { Component } from "react";
import FDisplayName from "./FDisplayName";
class RenderNameChange extends Component {
  state = { name: "Render Optimization" };
  render() {
    console.log("...Inside Render Change Name");
    return (
      <div>
        <FDisplayName name={this.state.name} />
        <button
          onClick={() => {
            this.setState({
              name: "MCA React Rendering",
            });
          }}
        >
          Change Name
        </button>
      </div>
    );
  }
}

export default RenderNameChange;
