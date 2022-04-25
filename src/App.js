import {Component} from 'react';

import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    monsters:[],
    searchField:''
    

  };
  
}

componentDidMount(){
 fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>this.setState(

  ()=>{
    return {monsters:data};
  },

  
))

;


};

onSearchChanga=(event)=>{
  const searchField = event.target.value.toLocaleLowerCase();
  
  this.setState(
  ()=>{return {searchField};},
  
  );
}


  render(){

    const {monsters, searchField} = this.state;
    const {onSearchChange} = this;
    const filteredMonsters = monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(searchField);});


    return (
      <div className="App" key='123'>
        <input className='search-box' type='search' placeholder='search monster' 
        onChange={onSearchChange}
        />
        
        {filteredMonsters.map((monster)=>{
          
          return <div key={monster.id}>
           <h1>{monster.name}</h1> 
           <p>{monster.email}</p>
           <div>
           Adress:
           <p>street: {monster.address.street}, suite: {monster.address.suite}</p>
           <p>company: {monster.company.name}</p>
           </div>
          
            
            </div>;

        })}


      </div>)

  };

}


export default App;
