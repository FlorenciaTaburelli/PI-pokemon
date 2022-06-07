
import Cards from './Cards'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getTypes, getAllPokemons, resetNewPokemon,resetPokemonByName } from '../redux/actions'
import PokemonFound from './PokemonFound';
import './Home.css'
import PokeCard from './PokeCard/PokeCard';
import Nav from "./Nav/Nav";

function Home() {

  const dispatch = useDispatch();
  const pokemonByName = useSelector((state) => state.pokemonByName);
  

  useEffect(() => {
   /// dispatch(getAllPokemons())
    //dispatch(getTypes())
    dispatch(resetPokemonByName())
    dispatch(resetNewPokemon())
  }, []);

 console.log(pokemonByName)

  return (
    <div className="Home">
        {/* {pokemonByName.name ? <PokemonFound name={pokemonByName.name} img={pokemonByName.img} id={pokemonByName.id} types={pokemonByName.types}/> 
        : <Cards />
        } */}
        <Cards />
    </div>
  );
}

export default Home;