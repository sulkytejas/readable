import * as APIUtil from '../utils/api';

export const ADD_ALL_POSTS = 'ADD_ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'


export const addAllPostsActions = posts =>{
  return {
    type: ADD_ALL_POSTS,
    posts
  }
};

export function deletePosts({id,deleted}){
  return{
    type: DELETE_POSTS,
    id,
    deleted
  }
}

export const  fetchData = () => dispatch => (
  APIUtil
  .getAllPosts()
  .then(data =>(dispatch(addAllPostsActions(data))))
  .catch(err => (console.log(err)))
)

export const SendPost = (title,body,category,author)=> dispatch =>(
  APIUtil
  .sendPost(title,body,category,author)
  .then(data => (console.log(data)))
  .catch(err => (console.log(err)))
)

export const DeletePost = (id)=> dispatch =>(
  APIUtil
  .deletePost(id)
  .then(data => (console.log(data)))
  .catch(err => (console.log(err)))
)
