import React,{ Component } from 'react'
import { withRouter } from 'react-router-dom';
import '../components/components.css';
import axios from 'axios'


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
    this.onSubmit=this.onSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
     this.setState({ [name]: value })
  }
  routeChange() {
    let path = "/";
    this.props.history.push(path);
  }

  onSubmit(e) {
    e.preventDefault()

    const userObject = {
      id:this.state.id,
      username:this.state.username,
      password:this.state.password,
        name: this.state.name,
        email: this.state.email
    };

    axios.post('http://localhost:3000/api/auth/register', userObject)
        .then((res) => {
            console.log(res.data)
        }).catch((error) => {
            console.log(error)
        });

    this.setState({ name: '', email: '',  username: '', password:'' })
  
}



    render() {
      return (
        <div>
        <h3>Create an account!</h3>
        <div className="Register">
        <form onSubmit={this.handleSubmit}>
        <div id="radio" onChange={this.onChangeValue}>
        <input type="radio" id="Student" name="id" checked={this.state.id === "1"} value="1"  onChange={this.handleChange}/>
           <label>Student</label>
      
           <input type="radio" id="Teacher" name="id" checked={this.state.id === "2"} value="2" onChange={this.handleChange} />
            <label>Teacher</label>
            </div>

            <label className="label"  for="name"  id="name" >Name: </label>
            <input className="input" type="text" id="name" name="name"  value={this.state.name} onChange={this.handleChange}/><br/>
            <label className="label"  for="username"  id="username" >Username: </label>
            <input  className="input" type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
            <label className="label"  for="password"  id="password">Password: </label>
            <input  className="input" type="password" id="password" name="password"value={this.state.password} onChange={this.handleChange}/><br/>
            <label className="label"  for="email"  id="email"  >Email: </label>
            <input  className="input" type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/><br/>
            <button type="submit" className="msgBtn" onClick={this.onSubmit}>Register</button>
            </form>
            </div>
      
        </div>)
    }
}

export default withRouter(Register)