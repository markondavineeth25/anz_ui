import React, {Component} from 'react';
import './bootstrap.css'
import './App.css';
import AccountRouter from './components/account/AccountRouter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AccountRouter />
      </div>
    );
  }
}

export default App;
