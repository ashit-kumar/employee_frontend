import axios from 'axios';
import React, { Component } from 'react';


class Table3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false,
            isOrder:false
        }
        this.renderTableBody = this.renderTableBody.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.sorting = this.sorting.bind(this);
        this.sortingN = this.sortingN.bind(this);
    }
    async componentDidMount(){

        const response= await axios.get('http://localhost:8080/employee/all')

        this.setState({users:response.data, isLoading:false})

        
    }

    deleteEmployee (id){
        axios.delete('http://localhost:8080/employee/del/'+id)
        alert("Employee deleted");
        window.location.reload(false);
        window.location.reload(false);
    }

    sorting(e,col){
        const d = this.state.users ;
        if(this.state.isOrder){
            d.sort((a,b) => a[col].localeCompare(b[col]));
        }else{
            d.sort((a,b) => b[col].localeCompare(a[col]));
        }
        this.setState({d});
        this.setState({isOrder:!this.state.isOrder});
    }
    sortingN(e,col){
        const d = this.state.users ;
        if(this.state.isOrder){
            d.sort((a,b) => a[col]>b[col]? 1:-1);
        }else{
            d.sort((a,b) => a[col]<b[col]? 1:-1);
        }
        this.setState({d});
        this.setState({isOrder:!this.state.isOrder});
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
        
        
        return users.length>0?(
            <div className='container'>
                <table className='table table-bordered table-striped table-hover border-primary'>
                    <thead className='bg-info'>
                        <th onClick={e =>this.sortingN(e,'id')}>ID</th>
                        <th onClick={e =>this.sorting(e,'firstname')}>First Name</th>
                        <th onClick={e =>this.sorting(e,'lastname')}>Last Name</th>
                        <th onClick={e =>this.sorting(e,'role')}>Role</th>
                        <th onClick={e =>this.sortingN(e,'salary')}>Salary</th>
                        <th onClick={e =>this.sorting(e,'address')}>Address</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>
                {/* <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                        {
                            pages.map((page)=>(
                                <li className="page-link">{page}</li>
                            ))
                        }
                    </ul>
                </nav> */}
            </div>
        ):( <div>no data</div> )
        
    }
}
 
export default Table3;