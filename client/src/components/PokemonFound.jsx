
//----------------------------------------------------------------
import { useDispatch, useSelector } from "react-redux";
import { resetPokemonByName } from '../redux/actions'
import PokeCard from "./PokeCard/PokeCard";
import { useEffect } from "react"
import loading from '../imag/pokeball-png.gif'


function PokemonFound(props) {

  const dispatch = useDispatch();
  const pokemonFound =  useSelector((state) => state.pokemonByName)
  
  function handleClick(e){
    e.preventDefault();
    dispatch(resetPokemonByName())
  }  
  // useEffect(() =>{
  //     <div className="loading">
  //       <img src={loading} alt="Loading" />
  //       <p className="cards-loading">Loading...</p>
  //     </div>
  // },[])
  // if(!pokemonFound){
  //   return (
  //     <div className="loading">
  //       <img src={loading} alt="Loading" />
  //       <p className="cards-loading">Loading...</p>
  //     </div>
  //   )
  // }else{
    return (
      <div className="container-found">
          
          {pokemonFound.msg ? <p>No se encontraron pokemones</p>
          :
          <PokeCard name={pokemonFound.name} img={pokemonFound.img} id={pokemonFound.id} types={pokemonFound.types}/>
          }
        
          <button onClick={(e) => handleClick(e)}>Go back</button>
      </div>
    )
  //}
   
    
  
}

export default PokemonFound;
