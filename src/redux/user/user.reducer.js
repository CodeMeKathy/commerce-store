//! User State Reducer

// Without defining an initial state the reducer will be unsure what the initial state is without it defined

const INITIAL_STATE = {
  currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {  // State default value is Initial State
  // A reducer is a function that gets two properties a state object representing the initial state or the last state that we are trying to store and then receives an action, that action is an object that has a type, a string value, a name that tells us whihc specific action it is.  A name created.
  // Actions may also include a payload, a very flexible proptery that comes with the action object which can or cannot be used.
  // This reducer gets the state and some action
  // The state will be whatever it is when the action is first fired when the app first initialized
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUSer: action.payload
      }
    default:
      return state
  }
}

export default userReducer
