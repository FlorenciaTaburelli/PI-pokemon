
//----------------------------------------------------------------
import { useDispatch } from "react-redux";
import { resetPokemonByName } from '../redux/actions'
import PokeCard from "./PokeCard/PokeCard";


function PokemonFound(props) {

  const dispatch = useDispatch();

  function handleClick(e){
    e.preventDefault();
    dispatch(resetPokemonByName())
  }  
  
  if (!props.name) {
    return (
      <div >
        Loading ...
      </div>
  )}else{
      return (
        <div className="container-found">
            <PokeCard name={props.name} img={props.img} id={props.id} types={props.types}/>
            <button onClick={(e) => handleClick(e)}>Go back</button>
        </div>
      );
   }  

}

export default PokemonFound;
