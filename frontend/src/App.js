import React, { Component } from 'react';
import './App.css';
import Index from './containers/Index'
import Register from './containers/Register'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

     <Router>
       <div>
        <Route path="/" exact component={Index} />
        </div>  
        <Route path="/register" component={Register} />

     </Router>
     
    </div>
  );
}

export default App;
