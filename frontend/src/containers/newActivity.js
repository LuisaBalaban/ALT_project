import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import '../components/components.css';

function newActivity()
{
    return(<div>
        <HeaderLogin/>
        <h3>Create a new activity</h3>
        <div  className="Register">

            <label  className="label" for="class"  id="class"  >Class: </label>
            <input className="input" type="text" id="uname" name="uname" value="Linear algebra"/><br/>
            <label className="label" for="date"  id="date" >Date: </label>
            <input className="input" type="date" id="date" name="date" value="10/09/2020"/><br/>
            <label className="label" for="time"  id="time" >Time: </label>
            <input className="input" type="time" id="time" name="time" value="10:20"/>
            
            </div>
         <button type="submit" className="msgBtn" onClick="return false;">Generate code</button><br/>
         <input className="generate" type="text" id="code" name="code" value="2x81J2"/><br/>
      
        </div>)
}
export default newActivity