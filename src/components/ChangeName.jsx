import React, { Component } from "react";
import DisplayName from "./DisplayName";
class ChangeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "MCA React",
      toggle: true,
    };
    console.log("Inside constructor...");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("Inside Derived Props...");
    return null;
  }
  componentDidMount() {
    console.log("Inside componentDidMount...");
  }
  updateName = () => {
    this.setState({
      name: "React Update Phase",
    });
  };
  shouldComponentUpdate() {
    console.log("Inside should Component Update...");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("Inside Snapshot Before Update...");
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshots) {
    console.log("Inside Component Did Update...");
  }

  toggleName = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    console.log("Inside render...");
    return (
      <div>
        {this.state.toggle === true ? (
          <DisplayName name={this.state.name} />
        ) : (
          <h2>Removed Component</h2>
        )}
        <button className="btn btn-primary" onClick={this.updateName}>
          Change Name
        </button>
        <br />
        <button className="btn btn-danger" onClick={this.toggleName}>
          Toggle Name
        </button>
      </div>
    );
  }
}

export default ChangeName;
