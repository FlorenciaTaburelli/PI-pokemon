
import { useDispatch } from "react-redux";

import { resetPokemonByName } from '../redux/actions'
import PokeCard from "./PokeCard";


function PokemonFound(props) {

  const dispatch = useDispatch();


  function handleClick(e){
    e.preventDefault();
    dispatch(resetPokemonByName())
  }  
  

    return (
      <div className="Home">
        {props.name ?
          <>
          <PokeCard name={props.name} img={props.img}/>
          <button onClick={(e) => handleClick(e)}>Go back</button>
          </>
          : 'Loading...'
        }

      </div>
    );
}  



export default PokemonFound;
