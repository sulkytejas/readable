import React, { Component } from 'react';
import {connect} from 'react-redux'
import Posts from './posts'
import Category from './category'
import{Route} from 'react-router-dom'
import SingleCategory from './singleCategory'
import { getCategories,getAllPosts,getPost,sendPost } from '../utils/api'
import { fetchData,SendPost,DeletePost } from '../actions/'
import Modal from 'react-modal';
import '../App.css';


class App extends Component {
  state={
    categories:[],
  }

  componentDidMount(){
    getCategories().then(res=> {return this.setState({categories:res.categories})})
  }

  render() {
    const {categories} = this.state
    return (
      <div className="App">
        <Route exact path="/" component={Category}/>
        {categories.map((category)=>(
          <Route exact path={category.path} component={SingleCategory}/>
        ))}

      </div>
    );
  }
}
export default App
