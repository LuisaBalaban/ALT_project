import React from 'react'
import './components.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios'

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
  this.onSend=this.routeChange.bind(this)

}
// onSubmit()
// {
//   if(this.state.id===1)
//   {

//   }
// }
handleChange(event) {
  const {name, value, type, checked} = event.target
//  type === "radio" ? this.setState({ [name]: checked }) :
   this.setState({ [name]: value })
}
routeChange() {
  let path = `/register`;
  this.props.history.push(path);
}
onSend()
{
  const formData = {
    id: this.state.id,
    password: this.state.password,
    username: this.state.username
    }

   axios({
    method: 'get',
    url: 'http://localhost:3000/api/auth/login',
    data: formData,
    config: { headers: {'Content-Type': 'multipart/form-data' }}
   })
   .then(function (response) {
   
  console.log(response);
   })
.catch(function (response) {
  console.log(response);

});
}

render(){

    return(
      <div>
      <form className="Form">
           <div className="radio">
           <input type="radio" id="Student" name="id" checked={this.state.id === "1"} value="1"  onChange={this.handleChange}/>
           <label>Student</label>
      
           <input type="radio" id="Teacher" name="id" checked={this.state.id === "2"} value="2" onChange={this.handleChange} />
            <label>Teacher</label>
            </div>
           <div className="form-insert">
           
            <label id="username" >Username: </label>
            <input type="text" id="username" name="username" value={this.state.username} onChange={this.handleChange}/><br/>
            <label>Password: </label>
            <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            
            </div>
            </form>
           <div className="form-send"> 
          <button className="msgBtn" onClick={this.onSend} >Sign In</button>
          <button className="msgBtn" onClick={this.routeChange}>Register</button>
          </div>
          </div>
     
        
      
    )
    }
}

export default withRouter(Form)