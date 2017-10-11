import dateFormat from 'dateformat'

const now = new Date();
const header = {'Authorization':'test','Accept':'application/json','Content-Type': 'application/json'}
const apiUrl = "http://localhost:3001"
//Fetch all the categories
export function getCategories(){
  return fetch("http://localhost:3001/categories", {method:'GET', headers: {'Authorization': 'test','Accept':'application/json'} })
    .then(data => { return data.json()})
}

// Fetch Post
export function getAllPosts(){
  return fetch("http://localhost:3001/posts",{method:'GET',headers:header})
    .then(data => data.json()).then(res => {
      return res;
    })
}

export function sendPost(title,body,category,author){
  return fetch("http://localhost:3001/posts",
  {method:'Post',
  headers:header,
  body: JSON.stringify({
    id:Math.floor((Math.random() * 100) + 1),
    timestamp:dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
    title:title,
    body:body,
    author: author,
    category:category,
  })
  })
  .then(data => { return data.json()})
}

export function deletePost(id){
  return fetch("http://localhost:3001/posts/"+id,
  {
    method:'DELETE',
    headers: {'Authorization': 'test'} ,
})
  .then(data => { return data.json()})
}

export function fetchSinglePost(id){
  return fetch("http://localhost:3001/posts/"+id,
  {
    method:'GET',
    headers: header ,
})
  .then(data => { return data.json()})
}

export function getComments(id){
  return fetch("http://localhost:3001/posts/"+id+"/comments",
  {
    method:'GET',
    headers: header ,
})
  .then(data => { return data.json()})
}

export function postComments(author,body,postID){
  return fetch ("http://localhost:3001/comments",
  {
    method:'Post',
    headers:header,
    body: JSON.stringify({
      id:Math.floor((Math.random() * 100) + 1),
      timestamp:dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
      body:body,
      author:author,
      parentId:postID
    })
  }
).then(data => { return data.json()})
}
