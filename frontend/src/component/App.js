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
    Post:[],
  }

  componentDidMount(){
    getCategories().then(res=> {return this.setState({categories:res.categories})})
    //  sendPost().then(res=> {return this.setState({allPost:res})})
    // this.props.ItemsfetchData("http://localhost:3001/posts",{method:'GET',headers:{'Authorization':'test','Accept':'application/json'}})
  }

  openFormModal = ()=>{
   this.setState(()=>({openModal: true}));
  }

  closeFormModal = ()=>{
   this.setState(()=>({openModal: false}));
  }
  render() {
    const {categories} = this.state
    return (
      <div className="App">
        <div className="container">
          <div className="navigation">
            <div className="logo">Readable</div>
            <button onClick={()=>this.openFormModal()} className="add-post">
              Add post
            </button>
          </div>
          <Category categories={categories}/>
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

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ItemsfetchData: (url) => dispatch(fetchData(url))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
