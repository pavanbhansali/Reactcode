import React, { useEffect } from 'react';
import WithStyle from '../hoc/WithStyle';
import withStyle from '../hoc/WithStyle';
import Cockpit from './Cockpit';
const Person = props => {

    console.log('Person props--',props);
    console.log('studentparams--',props.match.params.studentid)

    // useEffect(() => {
    //     console.log('inside person useeffect');
    //     return () => {
    //         alert('Person Component unmounted--');
    //     }
    // })
   

    return(<div>

            
            My Person Component
            <input  onChange={props.inputChange}  type="text" ></input>
            <Cockpit />
        

        </div>
        


      
    )
       
           
    

}
export default Person;