import React, { Component } from "react";
import "./App.css";
import PointsRemaining from "./points-remaining";
import Category from "./category";
import specialData from "./special-data";

class App extends Component {
  state = {
    specialData: specialData
  };
  render() {
    const handlePoints = (categoryName, direction) => {
      const specialData = this.state.specialData.map(category => {
        if (
          category.name === categoryName &&
          direction === "right" &&
          category.points < 10 &&
          pointsRemaining > 0
        ) {
          category.points += 1;
        } else if (
          category.name === categoryName &&
          direction === "left" &&
          category.points > 0
        ) {
          category.points -= 1;
        }
        return category;
      });
      this.setState({ specialData });
    };

    const categories = this.state.specialData.map(category => {
      return (
        <Category
          key={category.name}
          category={category}
          handlePoints={handlePoints}
        />
      );
    });

    const pointMap = specialData.map(category => {
      return category.points;
    });

    const pointsUsed = pointMap.reduce((a, b) => {
      return a + b;
    });

    const pointsRemaining = 28 - pointsUsed;

    return (
      <div>
        <div className="headline">You're S.P.E.C.I.A.L.</div>
        {categories}
        <PointsRemaining pointsRemaining={pointsRemaining} />
      </div>
    );
  }
}

export default App;
