import React, { Component } from 'react';
import Modal from 'react-modal';
import '../App.css';

class App extends Component {
  state={
    openModal: false,
  }

  componentDidMount(){
  fetch("http://localhost:3001/categories", {method:'GET', headers: {'Authorization': 'test','Accept':'application/json'} })
  .then(data => { return data.json()})
  }

  openFormModal = ()=>{
   this.setState(()=>({openModal: true}));
  }

  closeFormModal = ()=>{
   this.setState(()=>({openModal: false}));
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <div class="navigation">
            <div class="logo">Readable</div>
            <button onClick={()=>this.openFormModal()} className="add-post">
              Add post
            </button>
          </div>
          <div class="categories">
            <div className="title"><h1>Technology</h1></div>
            <div className="posts">
              <h1>All the dumb things you can say about romance</h1>
              <div className="description">As you have guessed from the title I dont...</div>
              <div className="authour">Ron Hogan</div>
              <div className="date">Sep 26</div>
            </div>
          </div>
        </div>
        <Modal
          isOpen = {this.state.openModal}
          onRequestClose = {()=>this.closeFormModal()}
          contentLabel = "Create a Post"
          className='modal'
          overlayClassName='overlay'
          >

          <h1>Create a post</h1>
          <form>
            <h2>Title</h2>
            <input
              className='form-title'
              type='text'
              placeholder='Enter Title'
              ref={(input) => this.input = input}
              />
            <h2>Description</h2>
            <input
             className='form-description'
             type='text'
             placeholder='Description'
             ref={(input) => this.input = input}
              />
              <h2>Body</h2>
            <input
              className='form-body'
              type='text'
              placeholder='Body'
              ref={(input) => this.input = input}
              />
            <button className="close" onClick={()=>this.closeFormModal()}>Close</button>
          </form>

        </Modal>
      </div>
    );
  }
}

export default App;
