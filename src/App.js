import React, { Component } from "react";
import "./App.css";
import PointsRemaining from "./points-remaining";
import Category from "./category";
import specialData from "./special-data";

class App extends Component {
  state = {
    pointsRemaining: 0
  };
  render() {
    const categories = specialData.map(category => {
      return <Category key={category.name} category={category} />;
    });
    return (
      <div>
        <div className="headline">You're S.P.E.C.I.A.L.</div>
        {categories}
        <PointsRemaining pointsRemaining={this.state.pointsRemaining} />
      </div>
    );
  }
}

export default App;
