import axios from "axios";
import React, { Component } from "react";
class DeleteAxios extends Component {
  state = {
    sid: "",
  };
  submitData = (event) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:8080/students/${this.state.sid}`)
      .then((response) => {
        alert("Student Deleted");
      })
      .catch((error) => {
        alert(error);
      });
  };
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="badge bg-primary my-4 fs-5">
        <h3>Delete Student Information</h3>
        <form onSubmit={this.submitData}>
          <label style={{ marginLeft: "-130px" }}>Student ID:</label>
          <br />
          <input
            type="text"
            value={this.state.sid}
            name="sid"
            onChange={this.handleOnChange}
          />
          <br />
          <button type="submit" className="btn btn-warning btn-sm m-2">
            Delete Student
          </button>
        </form>
      </div>
    );
  }
}

export default DeleteAxios;
