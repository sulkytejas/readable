import React, { Component } from 'react';
import{Route} from 'react-router-dom'
import Category from './category'
import SingleCategory from './singleCategory'
import SinglePost from './singlePost'
import SingleComment from './singleComment'
import '../App.css';


class App extends Component {
  state={}

  render() {
    return (
      <div className="App">
        <div className="navigation">
          <div className="logo">Readable</div>
        </div>
       <Route exact path="/" component={Category} />
       <Route exact path="/:category" component={SingleCategory} />
       <Route exact path="/posts/:id" component={SinglePost}/>
       <Route exact path="/comments/:id" component={SingleComment}/>
      </div>
    );
  }
}
export default App
