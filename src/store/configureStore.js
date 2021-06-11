import authReducer from '../reducers/auth';
import { createStore, combineReducers } from 'redux';
import accountsReduer from '../reducers/accountsReducer';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReduer,
            uid: authReducer,
          }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  
    return store;
  };

  export default configureStore;