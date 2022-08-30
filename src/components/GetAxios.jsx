import React, { Component } from "react";
import axios from "axios";
class GetAxios extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:8080/students/")
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        alert(error);
      });
  }
  render() {
    return (
      <div className="m-2 col-8 mx-auto fs-6">
        <h2>Student Information</h2>
        <table className="table table-warning">
          <thead className="table table-success">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.data.map((student) => (
              <tr key={student.sid}>
                <th scope="row">{student.sid}</th>
                <td>{student.name}</td>
                <td>{student.course}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default GetAxios;
