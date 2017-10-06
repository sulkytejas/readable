import * as APIUtil from '../utils/api';

export const ADD_ALL_POSTS = 'ADD_ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'


export const addAllPostsActions = posts =>({
  type: ADD_ALL_POSTS,
  posts
});

export function addPosts({id,timestamp,title,body,author,category}){
  return {
    type: ADD_POSTS,
    id,
    timestamp,
    title,
    body,
    author,
    category
  }
}

export function deletePosts({id,deleted}){
  return{
    type: DELETE_POSTS,
    id,
    deleted
  }
}

export const  fetchData = () => dispatch => (
  APIUtil
  .getAllPosts
  .then(data =>dispatch(addAllPostsActions(data)))
)
