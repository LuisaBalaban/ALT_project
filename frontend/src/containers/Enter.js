import React, { Component } from 'react';
import Header from '../components/Header';
import '../components/components.css';

class Enter extends Component {
    render() {
      return (
        <div className="Register">
            <Header/>
        <h3>Enter activity code</h3>
        <label for="activityCode"  id="activityCode" >Name: </label>
            <input type="text" id="activityCode" name="activityCode" value="QYE82AI"/><br/>
            <button className="form-send" type="submit" className="msgBtn" onClick="return false;">Register</button>
        </div>)
    }
}

export default Enter 