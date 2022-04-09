import {Component} from 'react';

import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    monsters:[
    {
      name:'Hitler',
      car:'Mercedes'
    },
    {name:'Mao', car:'Audi'},
    {name:'Stalin',car:'Renault'}
    ]
    

  };
  
}


  render(){
    return (
      <div className="App">
        <h1>{
          this.state.monsters.map((monster)=>{
            return( <>
            <h2>{monster.name}</h2>
            <p>{monster.car}</p>
            </>);
            
            
          })
          
          }</h1>
      </div>
    );
  }

}


export default App;
