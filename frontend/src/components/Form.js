import React from 'react'

function Form()
{
    return(
      <div className="Form">
           <div class="radio">
           <input type="radio" id="Student" name="type" value="Student"/>
           <label for="Student">Student</label>

           <input type="radio" id="Teacher" name="type" value="Teacher"/>
            <label for="Student">Teacher</label>
            </div>
           {/* <div id="form"> */}
           
            <label for="uname"  id="uname" >Username:</label><br/>
            <input type="text" id="uname" name="uname" value="studentAbc"/><br/>
            <label for="pass"  id="uname">Password:</label><br/>
            <input type="password" id="pass" name="pass" value="abc"/>
            
            {/* </div> */}
           <div id="outer">
          <div class="inner"><button type="submit" class="msgBtn" onClick="return false;">Sign In</button></div>
           <div class="inner"><button type="submit" class="msgBtn2" onClick="return false;">Register</button></div>
          </div>
        </div>
        
      
    )

}

export default Form