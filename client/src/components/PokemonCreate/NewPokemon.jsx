import React, { useEffect  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {resetNewPokemon, getAllPokemons} from '../../redux/actions'
import CardDetail from "../CardDetail/CardDetail";
import './NewPokemon.css'


function NewPokemon() {
   
  const pokemon = useSelector((state) => state.newPokemon)

  const dispatch = useDispatch();

   useEffect(() => {
   // dispatch(getTypes())
    dispatch(getAllPokemons())
   }, [])

    return (
     <div className="container-pokemon-created">
         <h2>I'm not a cat, i'm a POKEMON! </h2> 
         <CardDetail
          name={pokemon.name}
          img={pokemon.img}
          hp={pokemon.hp}
          attack={pokemon.attack}
          defense={pokemon.defense}
          speed={pokemon.speed}
          height={pokemon.height}
          weight={pokemon.weight}
          types={pokemon.types}
         />
           {/* Falta la tarjeta gigante */}
         <Link to={'/home/'} className='btn-go-home'>Go Home!</Link>
     </div>
    );
}  



export default NewPokemon;

