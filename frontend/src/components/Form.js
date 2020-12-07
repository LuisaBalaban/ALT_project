import React from 'react'
import './components.css';
import { useHistory } from "react-router-dom";

function Form()
{
  const history = useHistory();
  const routeChangeRegister = () =>{ 
    let path = `/register`; 
    history.push(path);
  }
  const routeChangeSign = () =>{ 
    let path = `/TeacherMain`; 
    history.push(path);
  }

    return(
      <div className="Form">
           <div className="radio">
           <input type="radio" id="Student" name="type" value="Student" />
           <label for="Student">Student</label>
      
           <input type="radio" id="Teacher" name="type" value="Teacher" />
            <label for="Student">Teacher</label>
            </div>
           <div className="form-insert">
           
            <label for="uname"  id="uname" >Username: </label>
            <input type="text" id="uname" name="uname" value="studentAbc"/><br/>
            <label for="pass"  id="uname">Password: </label>
            <input type="password" id="pass" name="pass" value="abc"/>
            
            </div>
           <div className="form-send">
          <button type="submit" className="msgBtn" onClick={routeChangeSign}>Sign In</button>
          <button type="submit" className="msgBtn" onClick={routeChangeRegister}>Register</button>
          </div>
        </div>
        
      
    )

}

export default Form