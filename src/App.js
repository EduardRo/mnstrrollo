import {Component} from 'react';
import CardList from './components/card-list/card-list.component';

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

onSearchChange=(event)=>{
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

      console.log(filteredMonsters)  
    return (
      <div className="App" key='123'>
        <input className='search-box' type='search' placeholder='search monster' 
        onChange={onSearchChange}
        />
        
        {filteredMonsters.map((monster)=>{
          
          return (<CardList monster={monster} key={monster.id}/>)

        })}


      </div>)

  };

}


export default App;
