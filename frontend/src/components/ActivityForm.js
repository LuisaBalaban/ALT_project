import React from 'react'
import './components.css';

class ActivityForm extends React.Component
{
    constructor()
    {
        super()
        this.state={
            className:"",
            date:"",
            time:"",

        }
        this.handleChange=this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
         this.setState({ [name]: value })
      }
    render()
    {
    return(

<div  className="Register">

<label  className="label"   id="class"  >Class: </label>
<input className="input" type="text" id="className" name="className" value={this.state.className} onChange={this.handleChange}/><br/>
<label className="label"   id="date" >Date: </label>
<input className="input" type="date" id="date" name="date" value={this.state.date} onChange={this.handleChange}/><br/>
<label className="label"  id="time" >Time: </label>
<input className="input" type="time" id="time" name="time" value={this.state.time} onChange={this.handleChange}/>

</div>)
}
}

export default ActivityForm