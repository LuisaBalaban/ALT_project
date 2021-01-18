import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import '../components/components.css';
import axios from 'axios'

class EnterActivity extends Component {

    constructor(props)
    {
        super(props)
        this.state = {
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username,
            description:this.props.location.state.description,
            activity_code: ""
      
          }
          console.log(this.props.location.state.username)
        this.handleChange=this.handleChange.bind(this)
        this.EnterActivity = this.EnterActivity.bind(this);
    }

    handleChange(event) {
    const {name, value} = event.target     
    this.setState({ [name]: value })
    }


    EnterActivity()
    {
        const enteredCode = {
            activity_code: this.state.activity_code
        }
       
        axios.post('http://localhost:3000/api/activity/getActivity', enteredCode).then(response => {
          console.log(response)
          if(response.status===200)
      {
        this.setState({
          description:response.data.data.description
       })
          if(this.state.roleId==1){
           
           let path = `/FeedbackG`;
          this.props.history.push({
            pathname: path,
            state: {
                roleId: this.state.roleId,
                username: this.state.username,
                activity_code: this.state.activity_code,
                description:response.data.data.description
            }
          
        });}
        else if(this.state.roleId==2){
          let path = `/FeedbackT`;
          this.props.history.push({
            pathname: path,
            state: {
                roleId: this.state.roleId,
                username: this.state.username,
                activity_code: this.state.activity_code,
                description:response.data.data.description
            }
          
        });

        }
        console.log(this.state.description)
      }
     
    }).catch(error => {
      console.log(error.response)
    })

    }

    render() {
      return (
        <div className="Register">
        <div>
           <button className="codes">Codes</button>
           <p className="name">{this.state.username}</p>
           </div>
        <h3>Enter your class</h3>
        <label >Activity Code: </label>
            <input type="text" id="activity_code" name="activity_code"  value={this.state.activity_code} onChange={this.handleChange}/><br/>
            <button className="form-send" className="msgBtn" onClick={this.EnterActivity}>Enter</button>
        </div>)
    }
}

export default EnterActivity 