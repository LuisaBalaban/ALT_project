import React,{ Component } from 'react'
import '../components/components.css';
import HeaderLogin from '../components/HeaderLogin';
import { withRouter } from 'react-router-dom';


class TeacherMain extends React.Component {

    constructor()
    {
        super()
        this.state={
            
        }
     
        this.newActivity=this.newActivity.bind(this);
        this.enterActivity=this.enterActivity.bind(this);
        this.feedHistory=this.feedHistory.bind(this);

    }


    newActivity()
    {
        let path = `/newActivity`;
        this.props.history.push(path);
    }

    enterActivity()
    {
        let path = `/enterActivity`;
        this.props.history.push(path);
    }
    feedHistory()
    {
        let path = `/History`;
        this.props.history.push(path);
    }

    render() {
      return (
        <div>
            <HeaderLogin/>
            <h3>What's your plan for today?</h3>
            <div className="buttons">
            <button className="msgBtn" onClick={this.newActivity}>Create new activity</button><br/>
            <button className="msgBtn" onClick={this.enterActivity}>Enter class</button><br/>
            <button className="msgBtn" onClick={this.feedHistory}>Check history</button><br/>
            </div>
        
      
        </div>)
    }
}

export default withRouter(TeacherMain)