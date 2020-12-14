import React from 'react'
import './components.css';
import { withRouter } from 'react-router-dom';

class Form extends React.Component{
constructor()
{
  super()
  this.state={
    id:"",
    username:"",
    password:""

  }
  this.handleChange=this.handleChange.bind(this)
  this.routeChange = this.routeChange.bind(this);

}
// onSubmit()
// {
//   if(this.state.id===1)
//   {

//   }
// }
handleChange(event) {
  const {name, value, type, checked} = event.target
  type === "radio" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
}
routeChange() {
  let path = `/register`;
  this.props.history.push(path);
}

render(){

    return(
      <form className="Form">
           <div className="radio">
           <input type="radio" id="Student" name="id" value="Student"  checked={this.state.id === "1"} onChange={this.handleChange}/>
           <label for="Student">Student</label>
      
           <input type="radio" id="Teacher" name="id" value="Teacher" checked={this.state.id === "2"} onChange={this.handleChange} />
            <label for="Teacher" >Teacher</label>
            </div>
           <div className="form-insert">
           
            <label for="uname"  id="uname" >Username: </label>
            <input type="text" id="uname" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
            <label for="pass"  id="uname">Password: </label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            
            </div>
           <div className="form-send">
          <button type="submit" className="msgBtn" >Sign In</button>
          <button className="msgBtn" onClick={this.routeChange}>Register</button>
          </div>
        </form>
        
      
    )
    }
}

export default withRouter(Form)