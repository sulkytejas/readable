import React, { Component } from 'react';

class Posts extends Component{
    handleRequest=(id)=>{
      this.props.DeletePost(id)
    }
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
              <div><button className="close" onClick={(post.id)=>this.handleRequest}>Delete</button></div>
            </div>

          ))}

        </div>
      )
    }
}

export default Posts
