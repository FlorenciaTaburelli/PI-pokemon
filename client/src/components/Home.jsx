
import Cards from './Cards'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getTypes, getAllPokemons } from '../redux/actions'
import PokemonFound from './PokemonFound';

function Home() {

  const dispatch = useDispatch();
  const pokemonByName = useSelector((state) => state.pokemonByName);

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypes())
  }, []);

 

  return (
    <div className="Home">
        {pokemonByName.name ? <PokemonFound name={pokemonByName.name} img={pokemonByName.img} id={pokemonByName.id}/> 
        : <Cards />
        }
    </div>
  );
}

export default Home;