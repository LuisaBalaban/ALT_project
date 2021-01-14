import React, { Component } from 'react';
import '../components/components.css';
import smiley from '../images/smiley.png'
import confused from '../images/confused.png'
import bored from '../images/bored.png'
import wow from '../images/wow.png'
import axios from 'axios'

class FeedbackG extends React.Component
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
            date:""
      
          }
      
          this.clickWow = this.clickWow.bind(this)
          this.clickSmiley = this.clickSmiley.bind(this)
          this.clickBored = this.clickBored.bind(this)
          this.clickConfused = this.clickConfused.bind(this)
          this.close = this.close.bind(this)

    }
    clickWow() {
        // this.setState({ type_id : 'wow',
        //                 date:new Date().toLocaleDateString()} );
        // e.preventDefault()
          const feedbackObject = {
            type_id : 1,
            user_id: this.state.roleId,
            activity_id: this.state.activity_code,
            date: new Date() 
          }
          console.log(feedbackObject)
    
        axios.post('http://localhost:3000/api/feedback/createFeedback', feedbackObject)
          .then((res) => {
            console.log(res.data)
            console.log("feedback was given")
          }).catch((error) => {
            console.log(error)
          });
        }
        clickBored() {
            // this.setState({ type_id : 'wow',
            //                 date:new Date().toLocaleDateString()} );
        
              const feedbackObject = {
                type_id : 2,
                user_id: this.state.roleId,
                activity_id: this.state.activity_code,
                date: new Date()
              }
              console.log(feedbackObject)
        
            axios.post('http://localhost:3000/api/feedback/createFeedback', feedbackObject)
              .then((res) => {
                console.log(res.data)
                console.log("feedback was given")
              }).catch((error) => {
                console.log(error)
              });
            }
        clickConfused() {
                // this.setState({ type_id : 'wow',
                //                 date:new Date().toLocaleDateString()} );
              
                  const feedbackObject = {
                    type_id : 3,
                    user_id: this.state.roleId,
                    activity_id: this.state.activity_code,
                    date: new Date()
                  }
                  console.log(feedbackObject)
            
                axios.post('http://localhost:3000/api/feedback/createFeedback', feedbackObject)
                  .then((res) => {
                    console.log(res.data)
                    console.log("feedback was given")
                  }).catch((error) => {
                    console.log(error)
                  });
                }
clickSmiley() {
                    // this.setState({ type_id : 'wow',
                    //                 date:new Date().toLocaleDateString()} );
               
                      const feedbackObject = {
                        type_id : 4,
                        user_id: this.state.roleId,
                        activity_id: this.state.activity_code,
                        date: new Date()
                      }
                      console.log(feedbackObject)
                
                    axios.post('http://localhost:3000/api/feedback/createFeedback', feedbackObject)
                      .then((res) => {
                        console.log(res.data)
                        console.log("feedback was given")
                      }).catch((error) => {
                        console.log(error)
                      });
                    }
                    

        
    
  close()
  {
    let path = `/`;
    this.props.history.push(path);

  }
    render() {
        return (<div>
               <div>
               <button onClick={this.close} id="close">Close the activity</button>
           <button className="codes">Codes</button>
           <p className="name">{this.state.username}</p>
           </div>
           <p>Course code: {this.state.activity_code}</p>
            <button class="feedbackBtnsUp"><img class="feedbackBtns" src={wow} alt="wow emoji" onClick={this.clickWow} /></button>
            <button class="feedbackBtnsUp"><img class="feedbackBtns" src={confused} alt="confused emoji" onClick={this.clickConfused} /></button>
            <br></br>
            <button class="feedbackBtns"><img class="feedbackBtns" src={smiley} alt="smiley emoji" onClick={this.clickSmiley} /></button>
    
            <button class="feedbackBtns"><img class="feedbackBtns" src={bored} alt="bored emoji" onClick={this.clickBored} /></button>

        </div>)
    }
}

export default FeedbackG