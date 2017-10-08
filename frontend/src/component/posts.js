import React, { Component } from 'react';

class Posts extends Component{

    render(){
      const posts = this.props.posts

      return(
        <div>
          {posts.map(post=>(
            <div className="posts" key={post.id}>
              <h1>{post.title}</h1>
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
