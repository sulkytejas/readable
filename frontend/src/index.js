import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import rootreducer from './reducers'

// const middlewareCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(rootreducer,applyMiddleware(thunk),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(<Provider store={store}>
     <App />
   </Provider>, document.getElementById('root'));
registerServiceWorker();
