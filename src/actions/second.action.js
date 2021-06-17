//Action will always return two things
    //a) action type
    //b) payload

//Components -> Action -> Reducer -> Store
const sendAuthData = (payload) => {
    return {
        'type': 'SET_AUTH',
        'payload': payload

    }
}

export default sendAuthData;