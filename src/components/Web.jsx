import React, { Component } from "react";
class Web extends Component {
  state = {
    username: "",
    password: "",
  };
  submitValue = (event) => {
    event.preventDefault();
    alert("Value Submited");
  };
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, password } = this.state;
    return (
      <div className="badge bg-primary my-4 fs-5">
        <h3>Login Page</h3>
        <form onSubmit={this.submitValue}>
          <label style={{ marginLeft: "-88px" }}>Username:</label>
          <br />
          <input
            type="text"
            value={username}
            name="username"
            onChange={this.handleOnChange}
          />
          <br />
          <br />
          <label style={{ marginLeft: "-88px" }}>Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <br />
          <button type="submit" className="btn btn-warning btn-sm m-2">
            Login
          </button>
        </form>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default Web;
