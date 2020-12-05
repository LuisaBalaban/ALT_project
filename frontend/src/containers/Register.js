import React,{ Component } from 'react'
import '../components/components.css';


class Register extends Component {
    render() {
      return (
        <div>
        <h3>Create an account!</h3>
        <div className="Register">
        <div id="radio">
           <input type="radio" id="Student" name="type" value="Student"/>
           <label for="Student">Student</label>
      
           <input type="radio" id="Teacher" name="type" value="Teacher"/>
            <label for="Student">Teacher</label><br/>
            </div>

            <label for="name"  id="name" >Name: </label>
            <input type="text" id="name" name="name" value="Student ABC"/><br/>
            <label for="uname"  id="uname" >Username: </label>
            <input type="text" id="uname" name="uname" value="studentAbc"/><br/>
            <label for="pass"  id="uname">Password: </label>
            <input type="password" id="pass" name="pass" value="abc"/><br/>
            <label for="email"  id="email">Email: </label>
            <input type="email" id="email" name="email" value="email@abc.com"/><br/>
            <button type="submit" className="msgBtn" onClick="return false;">Register</button>
            </div>
      
        </div>)
    }
}

export default Register 