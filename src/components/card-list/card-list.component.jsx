import { Component } from "react";
import './card-list.styles.css';

class CardList extends Component {
    render (){
        const { monsters } = this.props;
        console.log(this.props.monsters);
        console.log('render from Cardlist');
        return (
            <div className='card-list'> 
                {monsters.map((monster) => {
                    monster;
                    return (
                    <Card monster={monster}/>
                )})}
            </div>
        )
    }
}

export default CardList;