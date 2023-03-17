import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

console.log(store.getState());
store.subscribe(() => { console.log(store.getState()); });

if (window.Cypress) {
  window.store = store;
}

export default store;
