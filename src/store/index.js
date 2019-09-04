import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
import logger from './../middleware/logger'

export default store = createStore(rootReducer,applyMiddleware(logger))