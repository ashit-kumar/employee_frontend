import axios from 'axios';
import React, { Component } from 'react';

class Table3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false
            
        }
        this.renderTableBody = this.renderTableBody.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
    }
    async componentDidMount(){
        //this.setState({isLoading:true})
        const response= await axios.get('http://localhost:8080/employee/all')

        this.setState({users:response.data, isLoading:false})
        console.log(this.state.users[0].address)
        
    }

    deleteEmployee (id){
        axios.delete('http://localhost:8080/employee/del/'+id)
        alert("Employee deleted");
        window.location.reload(false);

    }

    renderTableBody =()=>{
        return this.state.users.map(user =>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstname}</td>
                    <td>{user.lastname}</td>
                    <td>{user.role}</td>
                    <td>{user.salary}</td>
                    <td>{user.address}</td>
                    <td><button style={{backgroundColor:"#FC7255"}} onClick = {()=>this.deleteEmployee(user.id)}>Delete</button></td>
                </tr>
            )
        })
    }

    render() { 
        const {users,isLoading} =this.state
        if(isLoading){
            return <div>Loading....</div>
        }
        // else if(isError){
        //     return <div>Error in fetching API</div>
        // }
        
        return users.length>0?(
            <div>
                <table>
                    <thead>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Address</th>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
            </div>
        ):( <div>no data</div> )
        
    }
}
 
export default Table3;