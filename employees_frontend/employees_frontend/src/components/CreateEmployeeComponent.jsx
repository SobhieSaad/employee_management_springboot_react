
import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponent extends Component {

    constructor(props){
        super(props);
        this.state={
            firstName: '',
            lastName: '',
            emailId : ''
        }

        this.changeLastNameHandler=this.changeLastNameHandler.bind(this);
        this.changeFirstNameHandler=this.changeFirstNameHandler.bind(this);
        this.changeEmailHandler=this.changeEmailHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee =(e)=>{
        e.preventDefault();
        let employee={firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        
        EmployeeService.createEmployee(employee).then(res=>{
            this.props.history.push('/employees');
        });
    }

    cancel(){
        this.props.history.push('/employees');
    }
    changeFirstNameHandler = (e)=>{
        this.setState({firstName: e.target.value})
    }

    changeLastNameHandler = (e)=>{
        this.setState({lastName: e.target.value})
    }

    changeEmailHandler = (e)=>{
        this.setState({emailId: e.target.value})
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3'>
                            <h3 className='tect-center'>Add Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label>First name</label>
                                        <input type="text" name='firstName' placeholder="first name" className="form-control" 
                                        value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Last name</label>
                                        <input type="text" name='lastName' placeholder="Last name" className="form-control" 
                                        value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="text" name='email' placeholder="Email" className="form-control" 
                                        value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)}
                                    style={{marginLeft:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;