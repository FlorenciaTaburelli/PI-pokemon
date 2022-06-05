import './PokeCard.css'
import { Link } from 'react-router-dom'

function PokeCard(props) {
 
    return (
      <Link to={`/pokemons/${props.id}`} className="pokemonCard">
        <div className="inside">
              <h4 className="name">{props.name}</h4>
              <img src={props.img} alt={props.name} className='image'/>
              {props.types.map((type, i) => <p key={i} className='type' >{type}</p>)}
          </div>
      </Link>
    );
}  



export default PokeCard;