import React, { Component } from "react";
class Web extends Component {
  state = {};
  submitValue = () => {
    const uname = document.getElementById("username");
    const pass = document.getElementById("password");
    console.log(uname, pass);
  };
  render() {
    return (
      <div className="text-center">
        <h2>Login Page</h2>
        <form>
          <label>Username:</label>
          <br />
          <input type="text" id="username" />
          <br />
          <label>Password:</label>
          <br />
          <input type="password" id="password" />
          <br />
          <button onClick={this.submitValue}> Login</button>
        </form>
      </div>
    );
  }
}

export default Web;
