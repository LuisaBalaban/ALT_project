import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';
import smiley from '../images/smiley.png'
import confused from '../images/confused.png'
import bored from '../images/bored.png'
import wow from '../images/wow.png'
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
            totalAmazing:"",
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

    componentDidUpdate(previousProps, previousState) {
      if (previousProps.data !== this.props.data) {
          this.setState({
            totalAmazing: this.props.data.totalAmazing,
            totalOK: this.props.data.totalOK,
            totalBoring: this.props.data.totalBoring,
            totalInteresting: this.props.data.totalInteresting})
      }

  }
  tick() {
    const enteredCode = {
      activity_code: this.state.activity_code 
  }
 
  var self=this;
    axios.post('http://localhost:3000/api/feedback/getFeedbackCountByActivityCode',enteredCode).then(response => 
    {
      self.setState({
        totalAmazing: response.data.data.totalAmazing,
        totalOK: response.data.data.totalOK,
        totalBoring: response.data.data.totalBoring,
        totalInteresting: response.data.data.totalInteresting
        })

      console.log(response)
      console.log(response.data.data.totalAmazing)
      }).catch(error => {
       console.log(error.response)})
       console.log(this.state.totalAmazing)
      
      
  }
    render() {
      console.log( this.state );

        return (
          <div>
            <div>
          <button className="codes" onClick={this.close} id="close">Exit</button>
      <button className="codes">Codes</button>
      <p className="name">{this.state.username}</p>
      </div>
      <div  className="details">
      <h3 className="titles">{this.state.description}</h3>
      <p className="smallIntro">Course code: {this.state.activity_code}</p></div>
        <p  class="response">{this.state.totalAmazing} x </p>
           <img  class="response" src={smiley}></img>
           <p  class="response">{this.state.totalOK} x </p>
           <img  class="response" src={wow}></img>
           <p  class="response">{this.state.totalInteresting} x</p>
           <img class="response" src={bored}></img>
           <p  class="response">{this.state.totalBoring} x</p>
           <img  class="response" src={confused}></img>
           <h4></h4>
           </div>
       )
    }
}

export default FeedbackT