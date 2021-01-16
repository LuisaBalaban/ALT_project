import React from 'react'
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';

import axios from 'axios'


class History extends React.Component
{
    constructor(props)
    {
      
        super(props)
        this.state = {
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username,
            activity_code: "",
            date:"",
            description:""
      
          }
          this.handleChange=this.handleChange.bind(this)
          this.FindActivity = this.FindActivity.bind(this)
        }
        handleChange(event) {
            const {name, value} = event.target
            this.setState({ [name]: value })
            
     }
        
        FindActivity()
       {
        const enteredCode = {
            activity_code: this.state.activity_code 
        }
        console.log(enteredCode)
        axios.post('http://localhost:3000/api/feedback/getFeedbackCountByActivityCode',enteredCode).then(response => 
        {console.log(response)
    }).catch(error => {
      console.log(error.response)
    })

    }

    mainMenu()
        {
            let path = `/TeacherMain`;
          this.props.history.push({
            pathname: path,
            state: {
                roleId: this.state.roleId,
                username: this.state.username
            }
        });
      }
    render() {
        return (
            <div className="History">
                <h3>History</h3>
            {/* <HeaderLogin/> */}
            <div>
           <button className="codes">Codes</button>
           <p className="name">Prof. {this.state.username}</p>
           </div>
            {/* <ActivityForm/> */}

            <label  className="label" id="description" >Class: </label>
<input className="input" type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /><br/>
<label className="label"   id="date" >Date: </label>
<input className="input" type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange}/><br/>
<label className="label"   id="Code" >Code: </label>
            <input className="input" type="text" id="activity_code" name="activity_code" value={this.state.activity_code} onChange={this.handleChange} />
            <button  className="msgBtn" onClick={this.FindActivity}>Explore</button><br/>
            <button  className="msgBtn" onClick={this.mainMenu}>Main Menu</button><br/>
            </div>
        )
    }
}
export default History