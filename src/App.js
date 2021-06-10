import React, {Component} from 'react';
import './bootstrap.css'
import './App.css';
import AccountRouter from './components/account/AccountRouter';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const jsx = (
  <Provider store={store}>
    <AccountRouter />
  </Provider>
);


class App extends Component {

  render() {
    return (
      <div className="App">
      { jsx }
      </div>
    );
  }
}

export default App;
