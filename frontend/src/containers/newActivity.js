import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';
import axios from 'axios'

class newActivity extends React.Component
{
  constructor(props)
    {
      
        super(props)
        this.state = {
            description:"",
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username,
            activity_code:"",
            date:"",
            time:""
      
          }
          this.handleChange=this.handleChange.bind(this)
          this.onSubmit = this.onSubmit.bind(this)
    }
    handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
    }

    onSubmit(e) {
      e.preventDefault()
        const activityObject = {
          description: this.state.description,
          activity_code:this.state.activity_code,
          roleId: this.state.roleId,
          date: this.state.date,

          
        }
  
        axios.post('http://localhost:3000/api/activity/addActivity', activityObject)
          .then((res) => {
            console.log(res.data)
            alert("activity was created!")
          }).catch((error) => {
            console.log(error)
          });
        }

        render() {
          return (<div>
        {/* <HeaderLogin/> */}
        <div>
           <button className="codes">Codes</button>
           <p className="name">{this.state.username}</p>
           </div>
        <h3>Create a new activity</h3>
       {/* <ActivityForm/> */}
       <div  className="Register">

<label  className="label"   id="description"  >Class: </label>
<input className="input" type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange}/><br/>
<label className="label"   id="date" >Date: </label>
<input className="input" type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange}/><br/>
<label className="label"  id="time" >Time: </label>
<input className="input" type="time" id="time" name="time" value={this.state.time} onChange={this.handleChange}/>
<label className="label"   id="Code" >Code: </label>
<input className="input" type="text" id="activity_code" name="activity_code" value={this.state.activity_code} onChange={this.handleChange}/>
</div>
<br/>
         <button type="submit" className="msgBtn" onClick={this.onSubmit}>Create activity</button><br/>
        
      
        </div>)
        }
}
export default newActivity