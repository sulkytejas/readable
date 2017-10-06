import { combineReducers } from 'redux'
import {ADD_ALL_POSTS,ADD_POSTS,DELETE_POSTS} from '../actions'


const InitialState =  {
  getPosts: 'null'
}

function postState(state=InitialState,action){
  const {data} = action
  switch (action.type) {

    case ADD_ALL_POSTS:
      return {...state,getPosts:'data'}

    default:
      return state

  }
}

export default combineReducers({postState})
