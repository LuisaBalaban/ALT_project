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
            date: new Date(),
            totalOK:"",
            totalAmazing:"555",
            totalInteresting:"",
            totalBoring:""
          }
         
          

    }
      

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    
  tick() {
    const enteredCode = {
      activity_code: this.state.activity_code 
  }
    
  var self = this;
    axios.post('http://localhost:3000/api/feedback/getFeedbackCountByActivityCode',enteredCode).then(response => 
    {
      self.setState={
        totalAmazing: response.data.data.totalAmazing,
        totalOK: response.data.data.totalOK,
        totalBoring: response.data.data.totalBoring,
        totalInteresting: response.data.data.totalInteresting
      }
      // console.log(response)
      // console.log(response.data.data.totalAmazing)
      }).catch(error => {
 
  console.log(error.response)
})

console.log(this.state.totalAmazing)
  }
    render() {
      const { totalAmazing, totalOK, totalInteresting, totalBoring } = this.state;
        return (
        <div>  
           <button className="codes">Codes</button>
           <h3>{this.state.totalAmazing}</h3>
           <h3>{this.state.totalOK}</h3>
           <h3>{this.state.totalInteresting}</h3>
           <h3>{this.state.totalBoring}</h3>
           <h3>{this.state.date.toLocaleTimeString()}</h3>
        </div>)
    }
}

export default FeedbackT