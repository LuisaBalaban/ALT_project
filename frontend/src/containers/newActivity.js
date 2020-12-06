import React, { Component } from 'react';
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';

function newActivity()
{
    return(<div>
        <HeaderLogin/>
        <h3>Create a new activity</h3>
       <ActivityForm/>
         <button type="submit" className="msgBtn" onClick="return false;">Generate code</button><br/>
         <input className="generate" type="text" id="code" name="code" value="2x81J2"/><br/>
      
        </div>)
}
export default newActivity