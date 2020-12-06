import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import '../components/components.css';

class EnterActivity extends Component {
    render() {
      return (
        <div className="Register">
            <HeaderLogin/>
        <h3>Enter your class</h3>
        <label for="activityCode"  id="activityCode" >Activity Code: </label>
            <input type="text" id="activityCode" name="activityCode" value="QYE82AI"/><br/>
            <button className="form-send" type="submit" className="msgBtn" onClick="return false;">Enter</button>
        </div>)
    }
}

export default EnterActivity 