export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER', // Because the type name should NEVER change, capital Snake_Case is utilized 
  payload: user
})
