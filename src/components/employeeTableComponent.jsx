import axios from 'axios';
import React, { Component } from 'react';
// import _ from 'lodash'

// const pageSize =5;
class Table3 extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false
            
        }
        this.renderTableBody = this.renderTableBody.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.sorting = this.sorting.bind(this);
        this.sortingN = this.sortingN.bind(this);
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

    sorting(e,col){
        const d = this.state.users ;
        d.sort((a,b) => a[col].localeCompare(b[col]));
        this.setState({d});
    }
    sortingN(e,col){
        const d = this.state.users ;
        d.sort((a,b) => a[col]>b[col]? 1:-1);
        this.setState({d});
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
        // const pageCount = users? Math.ceil(users.length/pageSize) : 0;
        // if (pageCount===1) return null;
        // const pages = _.range(1,pageCount+1);
        return users.length>0?(
            <div className='container'>
                <table className='table table-bordered'>
                    <thead>
                        <th onClick={e =>this.sortingN(e,'id')}>ID</th>
                        <th onClick={e =>this.sorting(e,'firstname')}>First Name</th>
                        <th onClick={e =>this.sorting(e,'lastname')}>Last Name</th>
                        <th onClick={e =>this.sorting(e,'role')}>Role</th>
                        <th onClick={e =>this.sortingN(e,'salary')}>Salary</th>
                        <th onClick={e =>this.sorting(e,'address')}>Address</th>
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