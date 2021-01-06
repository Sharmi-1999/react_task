import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { transactionReducer } from './reducers/transactionReducer'
import Data from './DummyData.json'

var testObject = Data;
// localStorage.setItem('testObject', JSON.stringify(testObject));

if (localStorage.getItem('testObject') == null)
  // localStorage.setItem('testObject', JSON.stringify([]))
  localStorage.setItem('testObject', JSON.stringify(testObject));


let initialState = {
  currentIndex: -1,
  list: JSON.parse(localStorage.getItem('testObject'))
}

var store = createStore(transactionReducer, initialState)
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
