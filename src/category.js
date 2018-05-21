import React from 'react'

class Category extends React.Component {
  render(){
    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">Category Name</div>
        <div className="arrow-container">
          <i className="fas fa-arrow-left arrow"></i>
          <div className="category-value">0</div>
          <i className="fas fa-arrow-right arrow"></i>
        </div>
      </div>
    </div>
  )
  }
}

export default Category
