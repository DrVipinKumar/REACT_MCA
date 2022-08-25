import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = {
    checkError: false,
  };
  static getDerivedStateFromError(error) {
    console.log(error);
    return {
      checkError: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.checkError === true ? (
          <h2 style={{ color: "#ff0000" }}>Error:Name is not valid</h2>
        ) : (
          this.props.children
        )}
      </div>
    );
  }
}

export default ErrorBoundary;
