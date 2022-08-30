import axios from "axios";
import React, { Component } from "react";
class PostAxios extends Component {
  state = {
    sid: "",
    name: "",
    course: "",
  };
  submitValue = (event) => {
    event.preventDefault();
    const students = this.state;
    axios
      .post("http://localhost:8080/students/", students)
      .then((response) => {
        alert("Information Submited");
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
    const { sid, name, course } = this.state;
    return (
      <div className="col-4 mt-4 mx-auto">
        <h3>Insert Student</h3>
        <div className="text-end">
          <button
            className="btn btn-danger btn-sm"
            onClick={this.props.onClose}
          >
            Close
          </button>
        </div>
        <form
          onSubmit={this.submitValue}
          className="badge bg-primary my-4 fs-5"
        >
          <label style={{ marginLeft: "-130px" }}>Student ID:</label>
          <br />
          <input
            type="text"
            value={sid}
            name="sid"
            onChange={this.handleOnChange}
          />
          <br />
          <label style={{ marginLeft: "-88px" }}>Student Name:</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleOnChange}
          />
          <br />
          <label style={{ marginLeft: "-88px" }}>Student Course:</label>
          <br />
          <input
            type="text"
            name="course"
            value={course}
            onChange={this.handleOnChange}
          />
          <br />
          <button type="submit" className="btn btn-warning btn-sm m-2">
            Insert Student
          </button>
        </form>
      </div>
    );
  }
}

export default PostAxios;
