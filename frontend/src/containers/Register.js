import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../components/components.css';
import axios from 'axios'


class Register extends Component {

  constructor() {
    super()
    this.state = {
      roleId: "",
      username: "",
      password: "",
      name: "",
      email: "",
      usernameError: "",
      passwordError: "",
      nameError: "",
      emailError: ""

    }
    this.handleChange = this.handleChange.bind(this)
    this.routeChange = this.routeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange(event) {
    const { name, value, type, checked } = event.target
    this.setState({ [name]: value })
  }
  routeChange() {
    let path = "/";
    this.props.history.push(path);
  }

  validate() {
        if (!this.state.name) 
      {
        if(this.state.usernameError!=="")
        { this.setState({ nameError: "" })}
        this.setState({ nameError: "Name cannot be blank !" })
        return false;
      } 

      if (!this.state.email.includes('@')) {
        if(this.state.emailError!=="")
        { this.setState({ emailError: "" })}
        this.setState({ emailError: 'Invalid Email !' })
        return false;
      }

      if (this.emailError && this.nameError) {
        this.setState({ emailError: 'Invalid Email', nameError: "Name cannot be blank" });
        return false;}

    return true;
  }
  onSubmit(e) {
    this.setState({usernameError:""})
    this.setState({emailError:""})
  

    e.preventDefault()
    const isValid = this.validate()
    if (isValid) {
      const userObject = {
        roleId: this.state.roleId,
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        email: this.state.email
      }

      axios.post('http://localhost:3000/api/auth/register', userObject)
        .then((res) => {
          console.log(res.data)
          alert("User was created!")
        }).catch((error) => {
          console.log(error)
        });

    }
    else
  // 
  {}
  }



  render() {
    return (
      <div>
        <h3>Create an account!</h3>
        <div className="Register">
          <form onSubmit={this.handleSubmit}>
            <div id="radio" >
              <input type="radio" name="roleId" checked={this.state.roleId === "1"} value="1" onChange={this.handleChange} />
              <label>Student</label>

              <input type="radio" name="roleId" checked={this.state.roleId === "2"} value="2" onChange={this.handleChange} />
              <label>Teacher</label>
            </div>

            <label className="label" id="name" >Name: </label>
            <input className="input" type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} /><br />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.nameError}
            </div>
            <label className="label" id="username" >Username: </label>
            <input className="input" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange} /><br />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.usernameError}
            </div>
            <label className="label" id="password">Password: </label>
            <input className="input" type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} /><br />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.passwordError}
            </div>

            <label className="label" id="email"  >Email: </label>
            <input className="input" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} /><br />
            <div style={{ fontSize: 14, color: "red" }}>
              {this.state.emailError}
            </div>

            <button type="submit" className="msgBtn" onClick={this.onSubmit}>Register</button>
           
          </form>
          <button className="msgBtn" onClick={this.routeChange}>Back to Login</button>
        </div>

      </div>)
  }
}

export default withRouter(Register)