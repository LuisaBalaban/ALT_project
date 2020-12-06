import React from 'react'
import './components.css';

function ActivityForm()
{
    return(

<div  className="Register">

<label  className="label" for="class"  id="class"  >Class: </label>
<input className="input" type="text" id="uname" name="uname" value="Linear algebra"/><br/>
<label className="label" for="date"  id="date" >Date: </label>
<input className="input" type="date" id="date" name="date" value="10/09/2020"/><br/>
<label className="label" for="time"  id="time" >Time: </label>
<input className="input" type="time" id="time" name="time" value="10:20"/>

</div>)
}

export default ActivityForm