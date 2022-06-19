
//----------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import { resetPokemonByName } from '../../redux/actions'
import PokeCard from "../PokeCard/PokeCard";
import './PokemonFound.css'

function PokemonFound(props) {

  const dispatch = useDispatch();
  const pokemonFound =  useSelector((state) => state.pokemonByName)
  
  function handleClick(e){
    e.preventDefault();
    dispatch(resetPokemonByName())
  }  
 
    return (
      <div className="container-found">
          
          {pokemonFound.msg ? <div className='container-msg'>
            <p className='msg-noPokemons'>{pokemonFound.msg}</p>
            <p className='msg-noPokemons'>Try again!</p>
          </div>
          :
          <PokeCard name={pokemonFound.name} img={pokemonFound.img} id={pokemonFound.id} types={pokemonFound.types}/>
          }
        
          <button onClick={(e) => handleClick(e)} className='btn-pokemonFound'>Go back</button>
      </div>
    )
  //}
   
    
  
}

export default PokemonFound;
