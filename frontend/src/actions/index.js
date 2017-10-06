export const ADD_ALL_POSTS = 'ADD_ALL_POSTS'
export const ADD_POSTS = 'ADD_POSTS'
export const DELETE_POSTS = 'DELETE_POSTS'

export function addAllPosts(){
  return {
    type: ADD_ALL_POSTS,
  }
}

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
