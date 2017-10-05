import React, { Component } from 'react';
import Posts from './posts'

class Category extends Component{
    render(){
      const {categories} = this.props
      return(
      <div>
        {categories.map((category)=> (
        <div class="categories" key={category.name}>
          <div className="title" ><h1>{category.name}</h1></div>
          <Posts/>
        </div>
        ))
      }
      </div>
      )
    }
}

export default Category
