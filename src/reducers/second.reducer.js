//A reducer is just a function which will modfy the state
// 'type': 'SET_AUTH',
//'data': payload


const initialState = {
    authData: {}
}



const secondReducer = (state= initialState,action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                authData: action.payload
            }
        default:
            return state;
    }
}
export default secondReducer;