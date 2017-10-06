//Fetch all the categories
export function getCategories(){
  return fetch("http://localhost:3001/categories", {method:'GET', headers: {'Authorization': 'test','Accept':'application/json'} })
    .then(data => { return data.json()})
}

// Fetch Post
export function getAllPosts(){
  return fetch("http://localhost:3001/posts",{method:'GET',headers:{'Authorization':'test','Accept':'application/json'}})
  .then(data => { return data.json()})
}

export function getPost(category){
  return fetch("http://localhost:3001/:"+category+"/posts",{method:'GET',headers:{'Authorization':'test','Accept':'application/json'}})
  .then(data => { return data.json()})
}

export function sendPost(){
  return fetch("http://localhost:3001/posts",
  {method:'Post',
  headers:{'Authorization':'test','Accept':'application/json'},
  body: JSON.stringify({
    id:1,
    timestamp:Date.now(),
    title:'test',
    body:'test1',
    category:'redux'
  })
  })
  .then(data => { return data.json()})
}
