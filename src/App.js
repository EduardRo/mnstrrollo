import {Component} from 'react';

import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    monsters:[
    {
      id:0,
      name:'Hitler',
      car:'Mercedes'
    },
    {
      id:1,
      name:'Mao', 
      car:'Audi'},
    {id:2,name:'Stalin',car:'Renault'}
    ]
    

  };
  
}


  render(){
    return (
      <div className="App" key='123'>
        
        {this.state.monsters.map((monster)=>{
          return <div key={monster.id}>
           <h1>{monster.name}</h1> 
           <p>{monster.car}</p>
            
            </div>;

        })}


      </div>)

  };

}


export default App;
