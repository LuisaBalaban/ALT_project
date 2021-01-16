import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';
import axios from 'axios'

class FeedbackT extends React.Component
{
  constructor(props)
    {
      
        super(props)
        this.state = {
            
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username,
            activity_code:this.props.location.state.activity_code,
            description:this.props.location.state.description,
            type_id:"",
            date:"",
            message: "",
            items: []
      
          }
      

    }
    render() {
        return (<div>  
           <button className="codes">Codes</button>
           <p className="name">{this.state.username}</p>
           <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        </div>)
    }
}

export default FeedbackT