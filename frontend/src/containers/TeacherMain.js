import React,{ Component } from 'react'
import '../components/components.css';
import HeaderLogin from '../components/HeaderLogin';

class TeacherMain extends Component {
    render() {
      return (
        <div>
            <HeaderLogin/>
            <h3>What's your plan for today?</h3>
            <div className="buttons">
            <button type="submit" className="msgBtn" onClick="return false;">Create new activity</button><br/>
            <button type="submit" className="msgBtn" onClick="return false;">Enter class</button><br/>
            <button type="submit" className="msgBtn" onClick="return false;">Check history</button><br/>
            </div>
        
      
        </div>)
    }
}

export default TeacherMain 