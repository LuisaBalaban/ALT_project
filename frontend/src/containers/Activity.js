import React, { Component } from 'react';
import Header from '../components/Header';
import '../components/components.css';

function Activity()
{
    return(<div>
        <Header/>
        <h3>Create a new activity</h3>
        <div className="Register">

            <label className="label" for="class"  id="class" >Class: </label>
            <input type="text" id="uname" name="uname" value="Linear algebra"/><br/>
            <label className="label" for="date"  id="date" >Date: </label>
            <input type="date" id="date" name="date" value="10/09/2020"/><br/>
            <label className="label" for="time"  id="time" >Time: </label>
            <input type="time" id="time" name="time" value="10:20"/><br/>
            </div>
         <button type="submit" className="msgBtn" onClick="return false;">Generate code</button><br/>
         <input type="text" id="code" name="code" value="2x81J2"/><br/>
      
        </div>)
}
export default Activity