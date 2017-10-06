import { combineReducers } from 'redux'
import {ADD_ALL_POSTS,ADD_POSTS,DELETE_POSTS} from '../actions'
import { getAllPosts } from '../utils/api'

const InitialState =  {
  getPosts:[]
}

function post(state=InitialState,action){
  switch (action.type) {
    case ADD_ALL_POSTS:
      return{
        getAllPosts()
        .then(res=> {return this.setState({allPosts:res})})
      }
    default:
      return state

  }
}

export default combineReducers({ })
