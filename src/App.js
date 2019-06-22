import React, { Component } from 'react'
import './App.css';
import Home from './container/Home' 
import {BrowserRouter as Router, Route} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <div>
        <Router>
           <Route path="/" component={Home}/>
        </Router>
      </div>
    )
  }
}

export default App


