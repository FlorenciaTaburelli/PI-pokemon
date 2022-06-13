
import Cards from '../Cards/Cards'
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { getTypes, getAllPokemons, resetNewPokemon,resetPokemonByName } from '../../redux/actions'
import PokemonFound from '../PokemonFound/PokemonFound';
import './Home.css'
import PokeCard from '../PokeCard/PokeCard';
import Nav from "../Nav/Nav";
//import imgCharmander from '../imag/charmander.png'


function Home() {

  const dispatch = useDispatch();
  const pokemonByName = useSelector((state) => state.pokemonByName);
  const allPokemons = useSelector((state) => state.pokemons)

  // useEffect(() => {
  //   dispatch(getAllPokemons())
  //   dispatch(getTypes())
  //   dispatch(resetPokemonByName())
  //   dispatch(resetNewPokemon())
  // }, []);

  // useEffect(() => {
  //   console.log(allPokemons)
  // }, [allPokemons])

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