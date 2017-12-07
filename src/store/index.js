import { createStore, compose,applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import logger from './middleware/logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default (history) => createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(routerMiddleware(history)),
    applyMiddleware(thunk),
    applyMiddleware(logger)
  ),
);