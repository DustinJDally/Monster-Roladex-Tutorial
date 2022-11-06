// import { Component } from "react";Used in Class
import Card from '../card/card.component';
import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className='card-list'> 
        {monsters.map((monster) => {
            return <Card monster={monster}/>;
        })}
    </div>
    );





//  CLASS COMPONENTS
// class CardList extends Component {
//     render (){
//         const { monsters } = this.props;
//         console.log(this.props.monsters);
//         console.log('render from Cardlist');
//         return (
//             <div className='card-list'> 
//                 {monsters.map((monster) => {
//                     return <Card monster={monster}/>;
//                 })}
//             </div>
//         );
//     }
// }

export default CardList;