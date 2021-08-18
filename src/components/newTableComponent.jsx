import axios from 'axios';
import React, { Component } from 'react';
// import { useMemo } from 'react';
// import { useTable } from 'react-table';
import ReactTable from 'react-table-6';  


class Table1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false
        }
    }
    async componentDidMount(){
        //this.setState({isLoading:true})
        const response= await axios.get('http://localhost:8080/employee/all')

        //console.log(response.data[0].firstname)

        this.setState({users:response.data, isLoading:false})



        // if(response.ok){
        //     const user = await response.data
        //     console.log(user)
        //     this.setState({users:user.data, isLoading:false})
        // }else{
        //     this.setState({isError:true,isLoading:false})
        // }
    }

    // renderTableBody =()=>{
    //     return this.state.users.map(user =>{
    //         return (
    //             <tr key={user.id}>
    //                 <td>{user.id}</td>
    //                 <td>{user.firstname}</td>
    //                 <td>{user.lastname}</td>
    //                 <td>{user.role}</td>
    //                 <td>{user.salary}</td>
    //                 <td>{user.address}</td>
    //                 {/* <td><button style={{backgroundColor:"#FC7255"}} onClick = {()=>this.deleteEmployee(user.id)}>Delete</button></td> */}
    //             </tr>
    //         )
    //     })
    // }

    render() { 
        const {users} =this.state
        
        
        // if(isLoading){
        //     return <div>Loading....</div>
        // }
        // // else if(isError){
        // //     return <div>Error in fetching API</div>
        // // }
        const columns = [
            {
              Header: 'ID',
              Footer: 'ID',
              accessor: 'id',
              disableFilters: true,
              sticky: 'left'
            },
            {
              Header: 'First Name',
              Footer: 'First Name',
              accessor: 'firstname',
              sticky: 'left'
            },
            {
              Header: 'Last Name',
              Footer: 'Last Name',
              accessor: 'lastname',
              sticky: 'left'
            },
            {
                Header: 'Role',
                Footer: 'Role',
                accessor: 'role',
                sticky: 'left'
              },
              {
                Header: 'Salary',
                Footer: 'Salary',
                accessor: 'salary',
                sticky: 'left'
              },
            
            {
              Header: 'Address',
              Footer: 'Address',
              accessor: 'address'
            }    
          ]

        return users.length>0?(
            <ReactTable
                data={users[1]}  
                columns={columns} />
                
        ):( <div>no data</div> )
                
    }
}
 
export default Table1;