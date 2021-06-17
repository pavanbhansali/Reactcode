import logo from './logo.svg';
import './App.css';
import React from 'react';
import Person from './Components/Person';
import {useState,useEffect} from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import Header from './Components/Header';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Cockpit from './Components/Cockpit';
import axios from 'axios'
import {
  FormBuilder,
  FieldGroup,
  FieldControl,
  Validators
} from "react-reactive-form";
import { connect } from 'react-redux';
import sendAuthData from './actions/second.action';



//uncontrlled components
//we will be using refs

const App = (props) => {

  // const [selectedValue,setInputValue] = useState('mango');

  const inputValueRef = React.createRef()
  const textAreaRef = React.createRef();

  console.log('props-- App.js',props);
  const myForm = FormBuilder.group({
    'username': '',
    'passwd': '',
    'isChecked': [''],
    'vaccineName': ['']
  });
  

   





  // const nameChangeHandler = (event) =>{
  //   setPersonName(event.target.value);
  //   setPersonAge(27);
  // }

  // const getInputValue = (event) => {
  //   setInputValue(event.target.value);
  // }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('usertypedinput--',inputValueRef.current.value);
    console.log('usertypedtextarea--',textAreaRef.current.value);

  }

  const submitForm = () => {

    const username = myForm.get('username').value;
    const password = myForm.get('passwd').value;
    const payload = {
      'username': username,
      'password': password
    }

    // axios.post('http://localhost:9000/todo/authenticateuser',payload).then(res=>console.log(res));

    props.sendAuthDataToStore(payload);

  }

  


  return (
    <div>

    
   <FieldGroup control = {myForm}
     render = {({get, invalid, reset, value }) => (
        <form onSubmit={handleSubmit}>
 
        <FieldControl
          name="username"
          options={{ validators: Validators.required }}
          render={({handler, touched, hasError}) => (
            <div>
              <label>Enter Username</label>
              <input {...handler()}/>
              <span>
                    {touched && hasError('required') && 'Password is required'}
                  </span>
            </div>
          )}
        />

        <FieldControl
          name="passwd"
          render={({handler}) => (
            <div>
                <label>Enter Pasword</label>
              <input {...handler()}/>
            </div>
          )}
        />
          <FieldControl
                      name="isChecked"
                      render={({handler}) => (
                        <div>
                            <label>Are you Vaccinated</label>
                          <input {...handler("checkbox")}/>
                        </div>
                      )}
                    />
                    {
                    myForm.get('isChecked').value===true ? <div>
                    <FieldControl
          name="vaccine"
          render={({handler}) => (
            <div>
                <label>Enter the vaccine name</label>
              <input {...handler()}/>
            </div>
          )}
        />
                    </div>: ''}

                            </form>

     )

     
     } >
   </FieldGroup>
   <button onClick = {submitForm}>Submit</button>
   </div>
   
  )
}




// export const App; //named export


const mapStateToProps = state => ({
  ...state
});
//sendAuthDataToStore is a action creator which helps in trggering yur sendAuthData action from app componnent
const mapDispatchToProps = dispatch => (
  {
 sendAuthDataToStore : (payload) => dispatch(sendAuthData(payload))
}
);


export default connect( mapStateToProps,mapDispatchToProps)(App)



