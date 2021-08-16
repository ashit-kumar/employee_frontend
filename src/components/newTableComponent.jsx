import axios from 'axios';
import React, { Component } from 'react';

class Table1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            users:[],
            isLoading:false,
            isError:false
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true})
        const response= await axios.get('https://jsonplaceholder.typicode.com/todos')

        this.setState({users:response.data, isLoading:false,isError:false})
        // if(response.ok){
        //     const user = await response.data
        //     console.log(user)
        //     this.setState({users:user.data, isLoading:false})
        // }else{
        //     this.setState({isError:true,isLoading:false})
        // }
    }

    renderTableBody =()=>{
        return this.state.users.map(user =>{
            return (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userId}</td>
                    <td>{(user.completed)? "true":"false"}</td>
                    <td>{user.title}</td>
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
        else{
            return users.length>0?(
                <div>
                    <table>
                        <thead>
                            <th>ID</th>
                            <th>UID</th>
                            <th>Status</th>
                            <th>Title</th>
                        </thead>
                        <tbody>
                            {this.renderTableBody()}
                        </tbody>
                    </table>
                </div>
            ):( <div>no data</div> )

        }
        
    }
}
 
export default Table1;