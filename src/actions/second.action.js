//Action will always return two things
    //a) action type
    //b) payload

import axios from "axios"

//Components -> Action -> Reducer -> Store
//action creators are functions 
//actions are objects that contain two things type and payload.
export const sendAuthData = (payload) => {
    return {
        'type': 'SET_AUTH',
        'payload': payload

    }
}

export const sendToDoData = ()=> {

    return async dispatch => {
       const toDoData = await axios.get('https://jsonplaceholder.typicode.com/todos');
       dispatch(dispatchToDoData(toDoData));
    }

}

const dispatchToDoData = (payload)=> {
    return {
        'type': 'SET_TO_DO_DATA',
        'payload': payload
    }
}

