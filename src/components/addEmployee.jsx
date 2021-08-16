import axios from "axios";

import React, { Component } from "react";

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstname: "",
      lastname: "",
      role: "",
      salary: "",
      address: "",
    };
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  add() {
    //console.log(this.state);
    axios.post("http://localhost:8080/employee/add", this.state);
    alert("Employee added");
    window.location.reload(false);
  }
  

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  

  render() {
    const { firstname, lastname, role, salary, address } = this.state;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                name="lastname"
                placeholder="last Name"
                value={lastname}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                name="role"
                placeholder="role"
                value={role}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                name="salary"
                placeholder="salary"
                value={salary}
                onChange={this.handleChange}
              />
            </td>
            <td>
              <input
                name="address"
                placeholder="address"
                value={address}
                onChange={this.handleChange}
              />
            </td>
            <td>
                <button style={{backgroundColor:"#87FE64"}} onClick = {()=> this.add()}>Add Employee</button>
            </td>
          </tr>
          </tbody>
      </table>
      
    );
  }
}

export default AddEmployee;
