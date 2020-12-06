import React from 'react'
import HeaderLogin from '../components/HeaderLogin';
import '../components/components.css';


class Course extends React.Component
{
    render() {
        return (
            <div>
            <HeaderLogin/>
            <h3>Linear Algebra</h3>
            <p>Prof. Kane Smith</p>
            <p> Code: 2xijds</p>
            {/* course name and all the text above will be taken from the code via DB */}
            <div className="feedbackButtons"> 
            <input type="image" id="image" alt="Wow" src='../images/wow.png'/>
            <input type="image" id="image" alt="bored" src='../images/bored.png'/><br/>
            <input type="image" id="image" alt="smiley" src='../images/smiley.png'/>
            <input type="image" id="image" alt="confused" src='../images/confused.png'/><br/>
            </div>
            </div>
        )
    }
}
export default Course