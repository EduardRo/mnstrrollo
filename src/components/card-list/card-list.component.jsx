import { Component } from "react";
import './card-list.styles.css';
import './card.styles.css';

class CardList extends Component{



render(){
    console.log('render from cardlist');
    const {monster} = this.props;
    return (<div key={monster.id+'m'} className='card-list'>
        
        <div className="card-container" key={monster.id}>
            <img alt='monster' 
            src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}/>
        <h2>{monster.name}</h2>
        <p>street: {monster.address.street}, suite: {monster.address.suite}</p>
        <p>company: {monster.company.name}</p>
        </div>
       
         
         </div>)
}


}
export default CardList;