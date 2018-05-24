import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './components/Home'
import './App.css';

const MyRouter = () => (
  <Router>
    <div className="application">
    <div className="nav-links">
      {/* <Link to="/register"><Button color='yellow'>Register</Button></Link> */}
    </div>
    <div className="outlet">
      <Route path="" component={Home} />
    </div>
    </div>
  </Router>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="circle one">&nbsp;</div>
        <div className="circle two">&nbsp;</div>
        <div className="circle three">&nbsp;</div>
        <div className="circle four">&nbsp;</div>
        <div className="circle five">&nbsp;</div>
        <div className="circle six">&nbsp;</div>
        <div className="circle seven">&nbsp;</div>
        <div className="circle eight">&nbsp;</div>
        <div className="circle nine">&nbsp;</div>
        <div className="circle ten">&nbsp;</div>
        <div className="circle eleven">&nbsp;</div>
        <div className="circle twelve">&nbsp;</div>
        <div className="circle thirteen">&nbsp;</div>
        <div className="circle fourteen">&nbsp;</div>
        <MyRouter/>
      </div>
    );
  }
}

export default App;
