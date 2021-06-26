import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WithStyle from '../hoc/WithStyle';
import withStyle from '../hoc/WithStyle';
import Cockpit from './Cockpit';
import Logout from './Logout';
import axios from 'axios';
import { sendToDoData } from '../actions/second.action';
const Person = props => {

    // useEffect(async () => {

    //     const toDoData = await axios.get('https://jsonplaceholder.typicode.com/todos');

    //     console.log('tododata---',toDoData);

    // },[]);

    useEffect(() => {
        props.getToDoData();
    },[])

    let userData = props.userAuthData ? props.userAuthData : '';
    let myToDoData = props.myToDoData ? props.myToDoData.data: [];
    myToDoData = myToDoData.slice(0,4);

    


    console.log('userdata---',userData);
    console.log('tododata---',myToDoData);
    // useEffect(() => {
    //     console.log('inside person useeffect');
    //     return () => {
    //         alert('Person Component unmounted--');
    //     }
    // })

    const logoutSuccess = () => {
        props.history.push('/');
    }
    

    return(<div>

            
            User Details
            <div>
                <p>Username : {userData?.name} </p>

            </div>
             <div>
                <p>UserEmail : {userData?.email} </p>
                
            </div>
            <div>
                <p>UserImage</p>
                <img src = {userData?.imageUrl} />
                
            </div>
            <div>
                <Logout logout = {logoutSuccess} />
            </div>
            {
                myToDoData.map(data => {
                    return(
                        <div>
                            <h1>{data.title}</h1>
                            </div>

                    )
                })
            }

            {/* <input  onChange={props.inputChange}  type="text" ></input>
            <Cockpit /> */}
        

        </div>
        


      
    )
       
           
    

}

const mapDispatchToProps = (dispatch) => {
    return {
        getToDoData: ()=> dispatch(sendToDoData())
    }
}

const mapStateToProps = (state)=> {
    return {
        'userAuthData': state.second.authData,
        'myToDoData': state.second.toDoData
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Person);