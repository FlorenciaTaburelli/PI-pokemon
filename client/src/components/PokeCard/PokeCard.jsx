import axios from 'axios'
import { Link } from 'react-router-dom'



function PokeCard(props) {
 
    return (
      <Link to={`/pokemons/${props.id}`}>
        <div className="pokemonCard">
              <h4>{props.name}</h4>
              <img src={props.img} alt={props.name}/>
              <div> 
                {/* {props.types.length > 0 && props.types.forEach(type => <p>{type}</p>)} */}
                {/* <h4 class="poke-types">
                  {types.length === 2 ? (
                    <div>
                      {typeof types[0] === 'string' ? types[0] : types[0]?.name}-    
                      {typeof types[1] === 'string' ? types[1] : types[1]?.name}
                    </div>) 
                    : (
                    <div>
                      {typeof types[0] === 'string' ? types[0] : types[0]?.name}
                    </div>
                  )}
                </h4> */}
             </div>
          </div>
      </Link>
    );
}  



export default PokeCard;