import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import '../components/components.css';
import axios from 'axios'

class EnterActivity extends Component {

    constructor()
    {
        super()
        this.state={
            activity_code:""
        }
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
        axios.get('http://localhost:3000/getActivity', enteredCode).then(response => {
      console.log(response)
    }).catch(error => {
      console.log(error.response)
    })

    }

    render() {
      return (
        <div className="Register">
            <HeaderLogin/>
        <h3>Enter your class</h3>
        <label  >Activity Code: </label>
            <input type="text" id="activity_code" name="activity_code"  value={this.state.activity_code} onChange={this.handleChange}/><br/>
            <button className="form-send" className="msgBtn" onClick={this.EnterActivity}>Enter</button>
        </div>)
    }
}

export default EnterActivity 