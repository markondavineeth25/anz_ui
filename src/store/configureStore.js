import authReducer from '../reducers/auth';
import { createStore, combineReducers } from 'redux';
import accountsReduer from '../reducers/accountsReducer';

const configureStore = () => {
    const store = createStore(
        combineReducers({
            accounts: accountsReduer,
            uid: authReducer,
          }));
  
    return store;
  };

  export default configureStore;