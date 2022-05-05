
import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService'

export class ListEmployeeComponent extends Component {

    constructor (props){
        super(props)
        this.state={
            employees: []
        }

        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee= this.deleteEmployee.bind(this);
    }
    

    deleteEmployee(id)
    {
        EmployeeService.deleteEmployee(id).then(res=>{
            this.setState({employee: this.state.employees.filter(employee=>employee.id !==id)})
        });
    }
    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`)
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res)=>{
            this.setState({
                employees: res.data
            });
        });
    }

    addEmployee(){
        this.props.history.push('/add-employee/_add');
    }
  render() {
    return (
      <div>
          <h2 className='text-center'>Employees List</h2> 
          <div className='row'>
              <button className='btn btn-primary' onClick={this.addEmployee}>Add Employee</button> 
          </div>
          <div className='row'>
              <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <button className='btn btn-success' onClick={()=>this.editEmployee(employee.id)}>Update</button>
                                    <button style={{marginLeft:"10px"}} className='btn btn-danger' onClick={()=>this.deleteEmployee(employee.id)}>Delete</button>

                                </td>
                                
                            </tr>
                        )
                    }
                </tbody>
              </table>
          </div>
      </div>
    )
  }
}

export default ListEmployeeComponent