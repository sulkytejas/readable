import dateFormat from 'dateformat'

const now = new Date();
const header = {'Authorization':'test','Accept':'application/json','Content-Type': 'application/json'}
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

export function getPost(category){
  return fetch("http://localhost:3001/:"+category+"/posts",{method:'GET',headers:{'Authorization':'test','Accept':'application/json'}})
  .then(data => { return data.json()})
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

export function deletePost(id=2){
  return fetch("http://localhost:3001/:"+id,
  {method:'GET',
  headers:header,
  body: JSON.stringify({
    deleted:true,
  })
})
  .then(data => { return data.json()})

}
