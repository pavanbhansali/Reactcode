//A reducer is just a function which will modfy the state
// 'type': 'SET_AUTH',
//'data': payload

//App -> Dispatching data from App componnet -> Setting data to the store(mapDispatchToProps)
//Person -> Able to get the data ->Get data from the store -> (mapStateToProps)

const initialState = {
    authData: {},
    toDoData: null
}



const secondReducer = (state= initialState,action) => {
    switch(action.type) {
        case 'SET_AUTH':
            return {
                ...state,
                authData: action.payload
            }
        case 'SET_TO_DO_DATA': 
            return {
                ...state,
                toDoData: action.payload
            }
        default:
            return state;
    }
}
export default secondReducer;