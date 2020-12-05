import React, { Component } from 'react';
import './App.css';
import Index from './containers/Index'
import Register from './containers/Register'
import Enter from './containers/Enter'
import Activity from './containers/Activity'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

     <Router>
       <div>
        <Route path="/" exact component={Index} />
        </div>  
        <Route path="/register" component={Register} />
        <Route path="/enterActivity" component={Enter} />
        <Route path="/activity" component={Activity} />

     </Router>
     
    </div>
  );
}

export default App;
