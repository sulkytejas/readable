import { combineReducers } from 'redux'
import {ADD_ALL_POSTS,ADD_POSTS,DELETE_POSTS} from '../actions'


const InitialState =  {
  getPosts: 'null'
}

function postState(state=InitialState,action){
  const {posts} = action
  switch (action.type) {

    case ADD_ALL_POSTS:
    console.log({posts})
      return {...state,getPosts:posts}

    default:
      return state

  }
}

export default combineReducers({postState})
