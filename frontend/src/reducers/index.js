import { combineReducers } from 'redux'
import {ADD_ALL_POSTS,ADD_POSTS,DELETE_POSTS,FETCH_POST,FETCH_COMMENTS} from '../actions'


const InitialState =  []

function postState(state=InitialState,action){
  const {posts,deleted_posts} = action
  switch (action.type) {
    case ADD_ALL_POSTS:
      return posts;

    case DELETE_POSTS:
      return state.filter(a=> a.id != deleted_posts.id);

    default:
      return state

  }
}

function singlePostState(state=[],action){
  const {post} = action

  switch (action.type) {
    case FETCH_POST:
      return post;

    default:
      return state

  }
}
function commentState(state=[],action){
  const {comment} = action

  switch (action.type) {
    case FETCH_COMMENTS:
    console.log(action)
      return comment;

    default:
      return state
  }
}

export default combineReducers({postState,singlePostState,commentState})
