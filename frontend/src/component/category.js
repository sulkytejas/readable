import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import{Route} from 'react-router-dom'
import SingleCategory from './singleCategory'
import Posts from './posts'


class Category extends Component{
    render(){
      const {categories,posts} = this.props
      return(
      <div>
        {categories.map((category)=> (
        <div className="categories" key={category.name}>
          <Link to={category.path}  className="title" ><h1>{category.name}</h1></Link>
          <Posts
            posts={posts.filter((a)=> a.category === category.name && a.deleted === false)}
            deletepost={(id)=>(this.props.deletepost(id))}/>
        </div>
        ))
      }
      </div>
      )
    }
}

export default Category
