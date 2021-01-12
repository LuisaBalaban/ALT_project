import React from 'react'
import './components.css';

class HeaderLogin extends React.Component {

    constructor(props)
    {
      
        super(props)
        // this.state = {
        //     roleId: this.props.location.state.roleId,
        //     username: this.props.location.state.username
      
        //   }
        //   console.log(this.props.location.state.username)
     }
    render() {
                  return(
        <div>
        <button className="codes">Codes</button>
        <p className="name">{}</p>
        </div>)
    
          }
}

export default HeaderLogin