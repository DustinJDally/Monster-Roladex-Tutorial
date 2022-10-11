import { Component } from 'react';
import './App.css';
import logo from './logo.svg';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Dustin"
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Sup {this.state.name}</p>
          <button onClick={()=>{ 
            this.state.name = 'James';
            console.log(this.state);
          }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
