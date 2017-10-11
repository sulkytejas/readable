import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import Modal from 'react-modal';
import Posts from './posts'
import {fetchSinglePost,AsyncfetchComments,AsyncPostComments } from '../actions/'


class SinglePost extends Component{

  state={
    openModal: false,
    body:'',
    author:'',
  }

  openFormModal = ()=>{
   this.setState(()=>({openModal: true}));
  }

  closeFormModal = ()=>{
   this.setState(()=>({openModal: false}));
  }

  componentDidMount(){
    const id = this.props.match.params.id
    this.props.itemFetchSinglePost(id)
    this.props.itemFetchComment(id)
    this.props.itemPostComment('a','b','as')
  }

    render(){
      const {post} = this.props
      const {body,author} = this.state
      return(
        <div>
          <div className="singlePost">
            <h2>{post.title}</h2>
            <p className="author">By {post.author}</p>
            <p className="body">{post.body}</p>

            <p className="category">{post.category}</p>
            <p className="time">{post.timestamp}</p>
          </div>
          <div className="comments">
            <button className="close" onClick={()=>this.openFormModal()}>Add Comment</button>
          </div>
          {/* //Modal to add comments */}
          <Modal
            isOpen = {this.state.openModal}
            onRequestClose = {()=>this.closeFormModal()}
            contentLabel = "Create a Post"
            className='modal'
            overlayClassName='overlay'
            >

            <h1>Add a comment</h1>
            <form>
                <h2>Author</h2>
                <input
                  className='form-author'
                  type='text'
                  placeholder='Author'
                  onChange = {(e)=> this.setState({author:e.target.value})}
                  ref={(input) => this.input = input}
                />
              <h2>Body(Description)</h2>
              <input
                className='form-body'
                type='text'
                placeholder='Body'
                onChange = {(e)=> this.setState({body:e.target.value})}
                ref={(input) => this.input = input}
                />
              <button
                className="close"
                onClick={()=>this.closeFormModal()}>
                Close
              </button>
              <button
                className="close"
                onClick={()=>this.props.itemPostComment(body,author,post)}>
                Submit
              </button>
            </form>

          </Modal>
        </div>

      )
    }
}

const mapStateToProps = ({ singlePostState,commentState }) =>
 ({ post: singlePostState, comments:commentState})

const mapDispatchToProps = (dispatch) => {
  return {
    itemFetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
    itemFetchComment: (id) => dispatch(AsyncfetchComments(id)),
    itemPostComment: (body,author,postID) => dispatch(AsyncPostComments(body,author,postID))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SinglePost);
