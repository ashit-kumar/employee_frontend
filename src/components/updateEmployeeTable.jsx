import axios from "axios";

import React, { Component } from "react";

class UpdateEmployee extends Component {
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
    this.edit = this.edit.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  
  edit() {
    //console.log(this.state);
    axios.put("http://localhost:8080/employee/update", this.state);
    alert("Employee Updated");
    window.location.reload(false);
  }


  handleUpdate(e){
      this.setState({[e.target.name]:e.target.value});
  }

  render() {
    const { id,firstname, lastname, role, salary, address } = this.state;
    return (
      <table>
        <tbody>
          <tr>
          <td>
              <input
                name="id"
                placeholder="ID"
                value={id}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
              <input
                name="firstname"
                placeholder="First Name"
                value={firstname}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
              <input
                name="lastname"
                placeholder="last Name"
                value={lastname}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
              <input
                name="role"
                placeholder="role"
                value={role}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
              <input
                name="salary"
                placeholder="salary"
                value={salary}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
              <input
                name="address"
                placeholder="address"
                value={address}
                onChange={this.handleUpdate}
              />
            </td>
            <td>
                <button style={{backgroundColor:"#F6FF63"}} onClick = {()=> this.edit()}>Update Employee</button>
            </td>
          </tr>
        </tbody>
      </table>
      
    );
  }
}

export default UpdateEmployee;
