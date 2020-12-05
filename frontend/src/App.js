import React, { Component } from 'react';
import './App.css';
import Index from './containers/Index'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">

             <Router>
             <div>
              <Route path="/" exact component={Index} />
              </div>
              </Router>
    </div>
  );
}

export default App;
