import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import WithStyle from '../hoc/WithStyle';
import withStyle from '../hoc/WithStyle';
import Cockpit from './Cockpit';
import Logout from './Logout';
const Person = props => {

    let userData = props.userAuthData ? props.userAuthData : '';
    console.log('userdata---',userData);
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

            {/* <input  onChange={props.inputChange}  type="text" ></input>
            <Cockpit /> */}
        

        </div>
        


      
    )
       
           
    

}
const mapStateToProps = (state)=> {
    return {
        'userAuthData': state.second.authData
    }
}
export default connect(mapStateToProps,null)(Person);