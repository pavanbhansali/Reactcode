import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from 'react-router-dom';
import Person from './Components/Person';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import firstReducer from './reducers/first.reducer';
import secondReducer from './reducers/second.reducer';
//My store has been created
const store1 = createStore(secondReducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store1}>
    <App name="alex" age="23" />
    </Provider>
  
   
    {/* <App  name="maria" age="34" />
    <App name = "john" age="28" >App Html from index</App> */}

  </React.StrictMode>,
  document.getElementById('root')
);

//1) install pacakges -> redux react-redux
//2) creation of  the store
      //a) reducer 
//3) Connect your app to the store.(Provider)
//4 make actions and reducers
//5 trigger action from component

//SWITCH(ACTION_TYPE):
//case GET_ALL_STUDENT_DATA:
//return all syudent data//
//case GET_TOP_STUDENT_DATA:
//return Top Students 
//store -> store is something which keeps your data.
//reducer -> a function which returns data from the store.(state) based on the action type
//actiontype -> GET_ALL_STUDENT_DATA
//action type -> GET_TOP_STUDENT_DATA

//Component -> Trigger a action with actiontype GET_TOP_STUDENT_DATA -> Action will call the reducer -> Reducer will go to Store and get the data -> data will be retuned to component
//actioncreator
//dispatch
//select
//Provider -> gives access to the store
//middleware -> actions and reducers(why middleware is used in redux??)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//Make a reactive form -> two inputs Name and Email Id a radio button will be for gender a checkbox(Are you married) input label 
