import React from 'react'
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import smiley from '../images/smiley.png'
import confused from '../images/confused.png'
import bored from '../images/bored.png'
import wow from '../images/wow.png'
import '../components/components.css';
import '../components/bootstrap.css';

import axios from 'axios'


class History extends React.Component {
    constructor(props) {

        super(props)
        this.state = {
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username,
            activity_code: "",
            date: "",
            description: "",
            totalOK:"",
            totalAmazing:"",
            totalInteresting:"",
            totalBoring:"",
            text:" "

        }
        this.handleChange = this.handleChange.bind(this)
        this.FindActivity = this.FindActivity.bind(this)
    }
    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })

    }

    FindActivity() {
        const enteredCode = {
            activity_code: this.state.activity_code

        }
        var text="Feedback summary"
        console.log(enteredCode)
        axios.post('http://localhost:3000/api/feedback/getFeedbackCountByActivityCode', enteredCode).then(response => {
            console.log(response)
            this.setState({
                totalAmazing: response.data.data.totalAmazing,
                totalOK: response.data.data.totalOK,
                totalBoring: response.data.data.totalBoring,
                totalInteresting: response.data.data.totalInteresting,
                text:text
                })
        }).catch(error => {
            console.log(error.response)
        })

    }

    mainMenu() {
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
            <section id="sectionLeft">
            <div class="container">
                <button className="codes">Codes</button>
                <p className="name">Prof. {this.state.username}</p>
                <div class="row">
                    <div class="col-sm">

                        <h3 id="leftTitle" className="titles">History</h3>
                        {/* <HeaderLogin/> */}
                        <div>

                        </div>
                        <div className="NAForm">
                            {/* <ActivityForm/> */}

                            <label className="label" id="description" >Class: </label>
                            <input className="input" type="text" id="description" name="description" value={this.state.description} onChange={this.handleChange} /><br />
                            <label className="label" id="date" >Date: </label>
                            <input className="input" type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange} /><br />
                            <label className="label" id="Code" >Code: </label>
                            <input className="input" type="text" id="activity_code" name="activity_code" value={this.state.activity_code} onChange={this.handleChange} />
                            <button className="msgBtn" onClick={this.FindActivity}>Search</button><br />
                            <button className="msgBtn" onClick={this.mainMenu}>Main Menu</button>
                        </div>
                       
                    </div>
                    <div class="col-sm">
                    <div class="row">
                        <h3 id="leftTitle" className="titles">Summary</h3>
                       
                        <p class="response">{this.state.totalAmazing} x </p>
                        <img class="response" src={smiley}></img>
                        <p class="response">{this.state.totalOK} x </p>
                        <img class="response" src={wow}></img>
                        
                        </div>
                        <div class="row">
                        <p class="response">{this.state.totalInteresting} x</p>
                        <img class="response" src={bored}></img>
                        <p class="response">{this.state.totalBoring} x</p>
                        <img class="response" src={confused}></img>
                        </div>
                        
                            <p> </p>
                
                        
                        </div>
                    </div>
                    
                    <br />
                </div>
           
          </section>    
         
        )
    }
}
export default History