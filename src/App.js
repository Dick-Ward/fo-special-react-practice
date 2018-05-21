import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PointsRemaining from './points-remaining'
import Category from './category'

class App extends Component {
  render() {
    return (
      <div>
      <div className="headline">You're S.P.E.C.I.A.L.</div>
      <Category />
      <PointsRemaining />
      </div>
    );
  }
}

export default App;
