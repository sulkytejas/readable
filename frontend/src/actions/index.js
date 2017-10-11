import * as APIUtil from '../utils/api';

export const ADD_ALL_POSTS = 'ADD_ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'


export const addAllPostsActions = posts =>{
  return {
    type: ADD_ALL_POSTS,
    posts
  }
};

export const deletedPosts = deleted_posts =>{
  return {
    type: DELETE_POSTS,
    deleted_posts
  }
};

export const fetchPost = post =>{
  return {
    type: FETCH_POST,
    post
  }
};

export const fetchComments = comment =>{
  return {
    type: FETCH_COMMENTS,
    comment
  }
};

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
  .then(data =>(dispatch(deletedPosts(data))))
  .catch(err => (console.log(err)))
)

export const fetchSinglePost = (id)=> dispatch =>(
  APIUtil
  .fetchSinglePost(id)
  .then(data =>(dispatch(fetchPost(data))))
  .catch(err => (console.log(err)))
)

export const AsyncfetchComments = (id)=> dispatch =>(
  APIUtil
  .getComments(id)
  .then(data =>(dispatch(fetchComments(data))))
  .catch(err => (console.log(err)))
)

export const AsyncPostComments = (body,author,postID) =>dispatch=>(
  APIUtil
  .postComments(body,author,postID)
  .then(data=> (console.log(data)))
  .catch(err=> (console.log(err)))
)
