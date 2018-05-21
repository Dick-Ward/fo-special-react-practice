import React from 'react'

class Category extends React.Component {
  render(){
    return(
    <div className="category-box">
      <div className="category-background">
        <div className="category-name">Category Name</div>
        <div className="category-value">0</div>
        <div className="arrows">
        <i className="fas fa-arrow-left arrow"></i>
        <i className="fas fa-arrow-right arrow"></i>
        </div>
      </div>
    </div>
  )
  }
}

export default Category
