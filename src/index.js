import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import DevTools from './DevTools';
import App from './App';
import { reducer } from './reducer.js';
import { addComment } from './actions.js';
import './index.css';


const store = createStore(reducer, DevTools.instrument());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

store.dispatch(addComment('pierwszy komentarz'));
store.dispatch(addComment('drugi komentarz'));
store.dispatch(addComment('trzeci komentarz'));