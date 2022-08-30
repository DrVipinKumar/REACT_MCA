import React, { Component } from "react";
class WebTable extends Component {
  state = {
    data: [
      { id: 1, name: "kiet1", course: "mca1" },
      { id: 2, name: "kiet2", course: "mca2" },
      { id: 3, name: "kiet3", course: "mca3" },
      { id: 4, name: "kiet4", course: "mca4" },
      { id: 5, name: "kiet5", course: "mca5" },
    ],
  };
  render() {
    return (
      <div className="m-5 col-4 mx-auto">
        <h2>Student Information</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Student Name</th>
              <th scope="col">Course</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {this.state.data.map((student) => (
              <tr key={student.id}>
                <th scope="row">{student.id}</th>
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

export default WebTable;
