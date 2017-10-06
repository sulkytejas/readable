import { combineReducers } from 'redux'
import {ADD_ALL_POSTS,ADD_POSTS,DELETE_POSTS,getAllPosts} from '../actions'


const InitialState =  {
  getPosts: []
}

function postState(state=InitialState,action){
  const {posts} = action
  switch (action.type) {

    case ADD_ALL_POSTS:
      return Object.assign(state,state,{getPosts:'test'})


    default:
      return state

  }
}

export default combineReducers({postState})
