import React, { Component } from 'react';
import {connect} from 'react-redux'
import Posts from './posts'
import Category from './category'
import { getCategories,getAllPosts,getPost,sendPost } from '../utils/api'
import { fetchData,SendPost,DeletePost } from '../actions/'
import Modal from 'react-modal';
import '../App.css';


class App extends Component {
  state={
    openModal: false,
    categories:[],
    body:'',
    category:'',
    title:'',
    author:'',
  }

  componentDidMount(){
    getCategories().then(res=> {return this.setState({categories:res.categories})})
    this.props.itemFetchPost()
  }

  openFormModal = ()=>{
   this.setState(()=>({openModal: true}));
  }

  closeFormModal = ()=>{
   this.setState(()=>({openModal: false}));
  }
  render() {
    const {categories,title,body,category,author} = this.state
    const posts = this.props.posts
    return (
      <div className="App">
        <div className="container">
          <div className="navigation">
            <div className="logo">Readable</div>
            <button onClick={()=>this.openFormModal()} className="add-post">
              Add post
            </button>
          </div>
          <Category categories={categories} posts={posts} deletePost={(id)=>(this.props.itemDeletePost(id))}/>
        </div>
        {/* Modal for Add post */}
        <Modal
          isOpen = {this.state.openModal}
          onRequestClose = {()=>this.closeFormModal()}
          contentLabel = "Create a Post"
          className='modal'
          overlayClassName='overlay'
          >

          <h1>Create a post</h1>
          <form>
            <h2>Title</h2>
            <input
              className='form-title'
              type='text'
              placeholder='Enter Title'
              onChange = {(e)=> this.setState({title:e.target.value})}
              ref={(input) => this.input = input}
              />
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
            <h2>category</h2>
            <select onChange = {(e)=> this.setState({category:e.target.value})}>
              {categories.map((category)=> (
                <option
                  key={category.name}
                  value={category.name}>
                    {category.name}
                  </option>
              ))
            }
          </select>
            <button
              className="close"
              onClick={()=>this.closeFormModal()}>
              Close
            </button>
            <button
              className="close"
              onClick={()=>this.props.itemSendPost(title,body,category,author)}>
              Submit
            </button>
          </form>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ postState }) => ({ posts: postState})

const mapDispatchToProps = (dispatch) => {
  return {
    itemFetchPost: (data) => dispatch(fetchData(data)),
    itemSendPost: (title,body,category,author) => dispatch(SendPost(title,body,category,author)),
    itemDeletePost: (id) => dispatch(DeletePost(id))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
