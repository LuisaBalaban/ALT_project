import React from 'react'
import './components.css';

function Form()
{
    return(
      <div className="Form">
           <div className="radio">
           <input type="radio" id="Student" name="type" value="Student"/>
           <label for="Student">Student</label>
      
           <input type="radio" id="Teacher" name="type" value="Teacher"/>
            <label for="Student">Teacher</label>
            </div>
           <div className="form-insert">
           
            <label for="uname"  id="uname" >Username: </label>
            <input type="text" id="uname" name="uname" value="studentAbc"/><br/>
            <label for="pass"  id="uname">Password: </label>
            <input type="password" id="pass" name="pass" value="abc"/>
            
            </div>
           <div className="form-send">
          <button type="submit" className="msgBtn" onClick="return false;">Sign In</button>
          <button type="submit" className="msgBtn" onClick="return false;">Register</button>
          </div>
        </div>
        
      
    )

}

export default Form