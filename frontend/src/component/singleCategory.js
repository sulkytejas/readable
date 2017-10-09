import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import Posts from './posts'

class SingleCategory extends Component{
    render(){
      const {categories,posts} = this.props
      return(
      <div>
        <h1>{categories.name}</h1>
        <Posts
          posts={posts.filter((a)=> a.category === categories.name && a.deleted === false)}
          deletepost={(id)=>(this.props.deletepost(id))}/>
      </div>
      )
    }
}

export default SingleCategory
