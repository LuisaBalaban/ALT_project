import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../components/components.css';


class Register extends Component {

  constructor() {
    super()
    this.state = {
      id:"",
      username:"",
      password:"",
      name:"",
      email:""

    }
    this.handleChange = this.handleChange.bind(this)
    this.routeChange=this.routeChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "radio" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }
  routeChange() {
    let path = "/";
    this.props.history.push(path);
  }


    render() {
      return (
        <div>
        <h3>Create an account!</h3>
        <div className="Register">
        <form onSubmit={this.handleSubmit}>
        <div id="radio" onChange={this.onChangeValue}>
           <input type="radio" id="Student" name="type" value="Student" checked={this.state.id === "1"} onChange={this.handleChange}/>
           <label for="Student">Student</label>
      
           <input type="radio" id="Teacher" name="type" value="Teacher" checked={this.state.id === "2"} onChange={this.handleChange}/>
            <label for="Teacher">Teacher</label><br/>
            </div>

            <label className="label"  for="name"  id="name" >Name: </label>
            <input className="input" type="text" id="name" name="name"  value={this.state.name} onChange={this.handleChange}/><br/>
            <label className="label"  for="uname"  id="uname" >Username: </label>
            <input  className="input" type="text" id="uname" name="uname" value={this.state.username} onChange={this.handleChange}/><br/>
            <label className="label"  for="password"  id="uname">Password: </label>
            <input  className="input" type="password" id="password" name="password"value={this.state.pass} onChange={this.handleChange}/><br/>
            <label className="label"  for="email"  id="email"  >Email: </label>
            <input  className="input" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            <button type="submit" className="msgBtn" onClick={this.routeChange}>Register</button>
            </form>
            </div>
      
        </div>)
    }
}

export default withRouter(Register)