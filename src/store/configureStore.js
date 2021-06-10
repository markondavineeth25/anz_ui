import authReducer from '../reducers/auth';
import { createStore } from 'redux';

const configureStore = () => {
    const store = createStore(authReducer,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
    return store;
  };

  export default configureStore;