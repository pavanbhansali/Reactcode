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
import GoogleLogin from 'react-google-login';
import Login from './Components/Login';
import Logout from './Components/Logout';



//uncontrlled components
//we will be using refs

const App = (props) => {

  // const [selectedValue,setInputValue] = useState('mango');

  const inputValueRef = React.createRef()
  const textAreaRef = React.createRef();
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  // const [inputValue,setInputValue] = useState('');
  const clientId = "576395696573-ejdfqgn7c0vu14kd8knhh8uftjqdin9j.apps.googleusercontent.com"

  console.log('props-- App.js',props);
  const myForm = FormBuilder.group({
    'username': '',
    'passwd': '',
    'isChecked': '',
    'vaccineName': ''
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

   
    // dispatch(sendAuthData(payload))


  }

  const onSuccessLogin = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
   
    // refreshTokenSetup(res);
    setIsLoggedIn(true);
    props.sendAuthDataToStore(res.profileObj);
    props.history.push('/persons');
  };
  const onSuccessLogout = (res) => {
    console.log('Login Success: currentUser:', res.profileObj);
    alert(
      `Logged out successfully `
    );
    // refreshTokenSetup(res);
    setIsLoggedIn(false);
    props.sendAuthDataToStore(null);
    props.history.push('/');
  };

  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
  };

  
  


  return (
    <div style = {{'textAlign': 'center'}}>
     <h3>Login to Our Website!!</h3>
     {!isLoggedIn && <Login login = {onSuccessLogin} />} 
     {isLoggedIn && <Logout logout = {onSuccessLogout} />}
     
     {/* <FieldGroup control = {myForm}>
       render = {
       ({get}) => {
        <form onSubmit = {handleSubmit}>
          <FieldControl name = "username"
          render = {
            ({handler})=>(
              <div>
              <label>Enter Username</label>
              <input {...handler()}/>
              </div>
            )
          } />
        </form>
       }
       
       }
     </FieldGroup> */}

    
   {/* <FieldGroup control = {myForm}
     render = {({get, invalid, reset, value }) => (
        <form onSubmit={handleSubmit}>
 
        <FieldControl
          name="username"
         
          render={({handler, touched, hasError}) => (
            <div>
              <label>Enter Username</label>
              <input {...handler()}/>
              
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
   <button onClick = {submitForm}>Submit</button> */}




   </div>
   
  )
}




// export const App; //named export


// const mapStateToProps = state => ({
//   ...state
// });
//sendAuthDataToStore is a action creator which helps in trggering yur sendAuthData action from app componnent
const mapDispatchToProps = dispatch => (
  {
 sendAuthDataToStore : (payload) => dispatch(sendAuthData(payload))
}
);


export default connect(null,mapDispatchToProps)(App)

//connect will have two parameters -> mapstatetoprops,mapdispatchToProps

//mapdispatchtoProps -> will send/duispatch the data to store.
//mapstatetoprops -> will get the data from the store



