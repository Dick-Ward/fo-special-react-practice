import React from "react";

class Category extends React.Component {
  render() {
    const handleClick = e => {
      this.props.handlePoints(
        e.target.getAttribute("category-name"),
        e.target.id
      );
    };
    const { category } = this.props;
    return (
      <div className="category-box">
        <div className="category-background">
          <div className="category-name">{category.name}</div>
          <div className="arrow-container">
            <i
              className="fas fa-arrow-left arrow"
              id="left"
              category-name={category.name}
              onClick={handleClick}
            />
            <div className="category-value">{category.points}</div>
            <i
              className="fas fa-arrow-right arrow"
              id="right"
              category-name={category.name}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
