import { createStore, applyMiddleware, compose  } from 'redux'
import rootReducer from "../reducers";
import thunk from "redux-thunk"
const middlewares = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares))
)

export { store }