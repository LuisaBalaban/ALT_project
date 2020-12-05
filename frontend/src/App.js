import React, { Component } from 'react';
import './App.css';
import Index from './containers/Index'
import Register from './containers/Register'
import EnterActivity from './containers/EnterActivity'
import Activity from './containers/Activity'
import TeacherMain from './containers/TeacherMain'
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
        <Route path="/activity" component={Activity} />
        <Route path="/teacherMain" component={TeacherMain} />

     </Router>
     
    </div>
  );
}

export default App;
