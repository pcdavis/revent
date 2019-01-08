import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers/rootReducer'

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = composeWithDevTools(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);
//The if statements below are used to add hotload to redux. Not necessary, but nice to have
  if(process.env.NODE_ENV !== 'production'){
    if(module.hot){
      module.hot.accept('../reducers/rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default;
        store.replaceReducer(newRootReducer);
      })
    }
  }

  return store;
};

/* Below is the version prior to using composeWithDevTools from the chrome extension, we just used the compose function from redux to build the middleware

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from '../reducers/rootReducer'

export const configureStore = preloadedState => {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const storeEnhancers = [middlewareEnhancer];
  const composedEnhancer = compose(...storeEnhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancer);

  return store;
};

*/