import React, { Component } from 'react';
import Posts from './posts'

class Category extends Component{
    render(){
      const {categories,posts} = this.props
      return(
      <div>
        {categories.map((category)=> (
        <div className="categories" key={category.name}>
          <div className="title" ><h1>{category.name}</h1></div>
          <Posts posts={posts.filter((a)=> a.category === category.name)} deletepost={(id)=>(this.props.deletepost(id))}/>
        </div>
        ))
      }
      </div>
      )
    }
}

export default Category
