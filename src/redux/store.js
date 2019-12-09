import { createStore, applyMiddleWare } from 'redux'

import logger from 'redux-logger' // Middlewares, expecting an array

const middlewares = [logger]

const store = createStore(rootReducer, applyMiddleware, ...middlewares)

export default store
