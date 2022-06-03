import axios from 'axios'
import { Link } from 'react-router-dom'


function PokeCard(props) {
  
    return (
      <Link to={`/pokemons/${props.id}`}>
        <div className="pokemonCard">
              <h4>{props.name}</h4>
              <img src={props.img} alt={props.name}/>
          </div>
      </Link>
    );
}  



export default PokeCard;