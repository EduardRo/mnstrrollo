import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    name:'Andre'
  }
  
}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name}
          </p>
          <button>hello my name is E</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }

}


export default App;
