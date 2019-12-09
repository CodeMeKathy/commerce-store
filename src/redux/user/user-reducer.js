// User State Reducer

const INITIAL_STATE= {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => { // State default value is Initial State
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
  
    default:
      return state;
  }
}

export default userReducer
