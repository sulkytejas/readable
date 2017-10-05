//Fetch all the categories
export function getCategories(){
  return fetch("http://localhost:3001/categories", {method:'GET', headers: {'Authorization': 'test','Accept':'application/json'} })
    .then(data => { return data.json()})
}
