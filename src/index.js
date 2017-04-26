import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './css/index.css';
import reducers from './reducers';

let store=createStore(reducers)

import jsonData from './data/profile.json'

function loadData() {
  store.dispatch({type : 'EDIT_BIODATA', payload: jsonData.BioData})
  store.dispatch({type : 'ADD_SKILLS', payload: jsonData.Skills})
  store.dispatch({type : 'ADD_PROJECTS', payload: jsonData.Projects})
} 

loadData()

/*
fetch('./data/profile.json')
        .then(res => res.json())
        .then(json =>  {
          console.log('sending json data to store',json)
          store.dispatch({type : 'ADD_BIODATA', payload: json.bioData})
          store.dispatch({type : 'ADD_SKILLS', payload: json.skills})
          store.dispatch({type : 'ADD_PROJECTS', payload: json.projects})
       });*/

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
