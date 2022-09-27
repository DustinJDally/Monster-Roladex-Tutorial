import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Sup Bitch
          </p>
          <button>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
