import React, { Component } from 'react';
import {connect} from 'react-redux'
import Posts from './posts'
import Category from './category'
import{Route,Router} from 'react-router-dom'
import SingleCategory from './singleCategory'
import SinglePost from './singlePost'
import { getCategories,getAllPosts,getPost,sendPost } from '../utils/api'
import { fetchData,SendPost,DeletePost } from '../actions/'
import Modal from 'react-modal';
import '../App.css';


class App extends Component {
  state={}

  render() {
    const {categories} = this.state
    return (
      <div className="App">
        <div className="navigation">
          <div className="logo">Readable</div>
        </div>
       <Route exact path="/" component={Category}/>
       <Route exact path="/:category" component={SingleCategory}/>
       <Route exact path="/posts/:id" component={SinglePost}/>
      </div>
    );
  }
}
export default App
