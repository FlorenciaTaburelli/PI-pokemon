
import Cards from './Cards'
import { useSelector, useDispatch } from "react-redux";
import PokeCard from "./PokeCard";
import React, { useEffect } from "react";
import { resetPokemonByName, getTypes, getAllPokemons } from '../redux/actions'
import PokemonFound from './PokemonFound';

function Home() {

  const dispatch = useDispatch();
  const pokemonByName = useSelector((state) => state.pokemonByName);

  useEffect(() => {
    dispatch(getAllPokemons())
    getTypes()
  }, []);

 

  return (
    <div className="Home">
        {pokemonByName.name ? 
          // <div>
          //   <PokeCard name={pokemonByName.name} img={pokemonByName.img} key={pokemonByName.id}/>
            
          // </div>
          <PokemonFound name={pokemonByName.name} img={pokemonByName.img}/>
        :  <Cards />
        }
    </div>
  );
}

export default Home;