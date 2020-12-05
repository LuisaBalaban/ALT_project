import React, { Component } from 'react';
import Header from '../components/Header';
import '../components/components.css';

function Activity()
{
    return(<div>
        <h3>Create a new activity</h3>
        <div className="CreateAct">

            <label for="class"  id="class" >Class: </label>
            <input type="text" id="uname" name="uname" value="Linear algebra"/><br/>
            </div>
      
        </div>)
}
export default Activity