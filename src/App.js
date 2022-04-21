import {Component} from 'react';

import './App.css';
class App extends Component{

constructor(){
  super();
  this.state = {
    monsters:[
   
    ]
    

  };
  
}

componentDidMount(){
 fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>
response.json())
.then((users)=>this.setState(

  ()=>{
    return {monsters:users};
  },

   ()=>  {
    console.log(this.state);
  }
))

;


}



  render(){
    return (
      <div className="App" key='123'>
        
        {this.state.monsters.map((data)=>{
          return <div key={data.id}>
           <h1>{data.name}</h1> 
           <p>{data.email}</p>
           <>
           Adress:
           <p>street: {data.address.street}, suite: {data.address.suite}</p>
           <p>company: {data.company.name}</p>
           </>
          
            
            </div>;

        })}


      </div>)

  };

}


export default App;
