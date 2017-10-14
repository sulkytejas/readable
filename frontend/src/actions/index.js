import * as APIUtil from '../utils/api';

export const ADD_ALL_POSTS = 'ADD_ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'
export const FETCH_POST = 'FETCH_POST'
export const EDIT_POST = 'EDIT_POST'
export const FETCH_COMMENTS = 'FETCH_COMMENTS'
export const POST_COMMENTS = 'POST_COMMENTS'
export const DELETE_COMMENTS = 'DELETE_COMMENTS'
export const GET_SINGLE_COMMENT = 'GET_SINGLE_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'


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

export const editPosts = post =>{
  return {
    type: EDIT_POST,
    post
  }
};

export const fetchComments = comment =>{
  return {
    type: FETCH_COMMENTS,
    comment
  }
};

export const postComments = comment =>{
  return {
    type: POST_COMMENTS,
    comment
  }
};

export const deletedComments = comment =>{
  return {
    type: DELETE_COMMENTS,
    comment
  }
};

export const getSingleComment = comment =>{
  return {
    type: GET_SINGLE_COMMENT,
    comment
  }
};

export const editComment = comment =>{
  return {
    type: EDIT_COMMENT,
    comment
  }
};

//Async Thunk Reuqest

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
  .then(data =>(dispatch(postComments(data))))
  .catch(err=> (console.log(err)))
)

export const DeleteComment = (id)=> dispatch =>(
  APIUtil
  .deleteComment(id)
  .then(data =>(dispatch(deletedComments(data))))
  .catch(err => (console.log(err)))
)

export const GetSingleComment = (id)=> dispatch =>(
  APIUtil
  .getSingleComment(id)
  .then(data =>(dispatch(getSingleComment(data))))
  .catch(err => (console.log(err)))
)

export const AsycEditPost = (id,title,body)=> dispatch =>(
  APIUtil
  .editPost(id,title,body)
  .then(data =>(dispatch(editPosts(data))))
  .catch(err => (console.log(err)))
)

export const AsycEditComment = (id,body)=> dispatch =>(
  APIUtil
  .editComments(id,body)
  .then(data =>(dispatch(editComment(data))))
  .catch(err => (console.log(err)))
)
