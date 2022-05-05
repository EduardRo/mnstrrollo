import { Component } from "react";

class CardList extends Component{



render(){
    console.log('render from cardlist');
    const {monster} = this.props;
    return (<div key={monster.id+'m'}>
        <h1>{monster.name}</h1> 
        <p>{monster.email}</p>
        <div>
        Adress:
        <p>street: {monster.address.street}, suite: {monster.address.suite}</p>
        <p>company: {monster.company.name}</p>
        </div>
       
         
         </div>)
}


}
export default CardList;