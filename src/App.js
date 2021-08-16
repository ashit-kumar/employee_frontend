
import './App.css';
import Table3 from './components/employeeTableComponent';
import AddEmployee from './components/addEmployee';
import UpdateEmployee from './components/updateEmployeeTable';

import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div style={{maxWidth:"max", paddingTop:"40 rem"}} >
      <AddEmployee/>
      <br></br>
      <Table3/>
      <br></br>
      <UpdateEmployee/>
    </div>
    
  );
}

export default App;
