import React from "react";

class Category extends React.Component {
  render() {
    const { category } = this.props;
    return (
      <div className="category-box">
        <div className="category-background">
          <div className="category-name">{category.name}</div>
          <div className="arrow-container">
            <i className="fas fa-arrow-left arrow" />
            <div className="category-value">{category.points}</div>
            <i className="fas fa-arrow-right arrow" />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
