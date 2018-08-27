import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import reducers from '../Reducer';
import thunk from './redux-thunk';
import reporter from './redux-reporter';


const createAppStore = () => {
  const store = createStore(reducers, compose(applyMiddleware(thunk, reporter)));
 

  return {
   
    store
  }
}

export default createAppStore;