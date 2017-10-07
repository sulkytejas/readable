import React, { Component } from 'react';
import {connect} from 'react-redux'
import Posts from './posts'
import Category from './category'
import { getCategories,getAllPosts,getPost,sendPost } from '../utils/api'
import { fetchData } from '../actions/'
import Modal from 'react-modal';
import '../App.css';


class App extends Component {
  state={
    openModal: false,
    categories:[],
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
    const {categories} = this.state
    const {posts} = this.props
    console.log(posts)
    return (
      <div className="App">
        <div className="container">
          <div className="navigation">
            <div className="logo">Readable</div>
            <button onClick={()=>this.openFormModal()} className="add-post">
              Add post
            </button>
          </div>
          {categories.map((category)=> (
          <div className="categories" key={category.name}>
            <div className="title" ><h1>{category.name}</h1></div>
            {posts.map((post)=>(<div>{post.title}</div>))}
            <div className="posts">
              <h1>All the dumb things you can say about romance</h1>
              <div className="description">As you have guessed from the title I dont...</div>
              <div className="authour">Ron Hogan</div>
              <div className="date">Sep 26</div>
            </div>
          </div>
          ))
        }
          {/* <Category categories={categories} posts={posts}/> */}
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
              ref={(input) => this.input = input}
              />
            <h2>Description</h2>
            <input
             className='form-description'
             type='text'
             placeholder='Description'
             ref={(input) => this.input = input}
              />
              <h2>Author</h2>
              <input
                className='form-author'
                type='text'
                placeholder='Author'
                ref={(input) => this.input = input}
              />
            <h2>Body</h2>
            <input
              className='form-body'
              type='text'
              placeholder='Body'
              ref={(input) => this.input = input}
              />
            <h2>category</h2>
            <select>
              {categories.map((category)=> (
                <option key={category.name} value={category.name}>{category.name}</option>
              ))
            }
          </select>
            <button className="close" onClick={()=>this.closeFormModal()}>Close</button>
          </form>

        </Modal>
      </div>
    );
  }
}

const mapStateToProps = ({ postState }) => ({ posts: postState})

const mapDispatchToProps = (dispatch) => {
  return {
    itemFetchPost: (data) => dispatch(fetchData(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
