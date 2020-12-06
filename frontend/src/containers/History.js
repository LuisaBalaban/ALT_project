import React from 'react'
import HeaderLogin from '../components/HeaderLogin';
import ActivityForm from '../components/ActivityForm';
import '../components/components.css';

class History extends React.Component
{
    render() {
        return (
            <div className="History">
                <h3>History</h3>
            <HeaderLogin/>
            <ActivityForm/>
            <button type="submit" className="msgBtn" onClick="return false;">Explore</button><br/>
            <button type="submit" className="msgBtn" onClick="return false;">Main Menu</button><br/>
            </div>
        )
    }
}
export default History