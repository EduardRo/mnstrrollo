import {Component} from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    name:{firstName:'Andre', lastName:'Sebastian'},
    company:'my company'
  }
  
}


  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            My name is {this.state.name.firstName} {this.state.name.lastName}
          </p>
          <h3>My company is {this.state.company}</h3>
          <button onClick={()=>
          {
            this.setState(()=>
            {return {name:{firstName:'George', lastName:'Modi'}, company:'IBM'};
            
          },()=>console.log(this.state));
            //console.log(this.state);

          }
        }>hello my name is E</button>
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
