import React, { Component } from "react";
class WebBootStrap extends Component {
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
      <div className="badge bg-danger my-4">
        <h3>Login Page</h3>
        <form onSubmit={this.submitValue} className="m-4">
          <div className="mb-3 text-start">
            <label for="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={this.handleOnChange}
              aria-describedby="username"
            />
          </div>
          <div className="mb-3 text-start">
            <label for="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleOnChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {JSON.stringify(this.state)}
      </div>
    );
  }
}

export default WebBootStrap;
