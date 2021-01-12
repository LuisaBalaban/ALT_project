import React,{ Component } from 'react'
import '../components/components.css';
import HeaderLogin from '../components/HeaderLogin';
import { withRouter } from 'react-router-dom';


class TeacherMain extends React.Component {

    constructor(props)
    {
      
        super(props)
        this.state = {
            roleId: this.props.location.state.roleId,
            username: this.props.location.state.username
      
          }
          console.log(this.props.location.state.username)
     
        this.newActivity=this.newActivity.bind(this);
        this.enterActivity=this.enterActivity.bind(this);
        this.feedHistory=this.feedHistory.bind(this);

    }


    // componentDidMount() {
    //     const name = this.props.username;
    //     const id = this.props.roleId;
    //     User.getBugData(data => {
    //       this.setState({name: data.username,
    //       id: Date.roleId})
    //     })
    //   }


    newActivity()
    {
        let path = `/newActivity`;
        this.props.history.push({
            pathname: path,
            state: {
                roleId: this.state.roleId,
                username: this.state.username
            }
        });
    }

    enterActivity()
    {
        let path = `/enterActivity`;
      this.props.history.push({
        pathname: path,
        state: {
            roleId: this.state.roleId,
            username: this.state.username
        }
    });
  }
    feedHistory()
    {
        let path = `/History`;
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
        <div>
            {/* < HeaderLogin/> */}
            <div>
           <button className="codes">Codes</button>
           <p className="name">{this.state.username}</p>
           </div>
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