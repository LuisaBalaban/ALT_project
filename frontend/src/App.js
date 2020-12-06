import React, { Component } from 'react';
import './App.css';
import Index from './containers/Index'
import Register from './containers/Register'
import EnterActivity from './containers/EnterActivity'
import newActivity from './containers/newActivity'
import TeacherMain from './containers/TeacherMain'
import Course from './containers/Course'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

     <Router>
       <div>
        <Route path="/" exact component={Index} />
        </div>  
        <Route path="/register" component={Register} />
        <Route path="/enterActivity" component={EnterActivity} />
        <Route path="/newActivity" component={newActivity} />
        <Route path="/teacherMain" component={TeacherMain} />
        <Route path="/course" component={Course} />

     </Router>
     
    </div>
  );
}

export default App;
