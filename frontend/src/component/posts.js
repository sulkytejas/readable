import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Posts extends Component{

    render(){
      const posts = this.props.posts

      return(
        <div>
          {posts.map(post=>(
            <div className="posts" key={post.id}>
              <Link to={'/posts/'+post.id}><h1>{post.title}</h1></Link>
              <div className="description">{post.body}</div>
              <div className="authour">{post.author}</div>
              <div className="date">{post.timestamp}</div>
              <div><button className="close" onClick={(id)=>this.props.deletepost(post.id)}>Delete</button></div>
            </div>

          ))}

        </div>
      )
    }
}

export default Posts
