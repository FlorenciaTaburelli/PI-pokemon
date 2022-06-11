import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { resetPokemonById, getPokemonById } from '../redux/actions'

function PokemonDetail() {
 const param = useParams()
 const dispatch = useDispatch()

 const pokemon = useSelector((state) => state.pokemonById)
 const pokemonByName = useSelector((state) => state.pokemonByName);
console.log(param.id)

useEffect(() => {
 /// dispatch(resetPokemonById())
  dispatch(getPokemonById(param.id))
}, []);

if (!pokemon.name) {
    return (
      <div >
        Loading ...
      </div>
)}else{
    return (
      <div className="PokemonDetail">
          <img src={pokemon.img} alt={pokemon.name} />
            <div className="infoDerecha">
                <h1>{pokemon.name}</h1>
                <span>HP: {pokemon.hp}</span> <span>Attack: {pokemon.attack}</span> <span>Defense: {pokemon.defense}</span>
                <br />
                <hr/>
                <br />
                <span>Speed: {pokemon.speed}</span> <span>Height: {pokemon.height}</span> <span>Weight: {pokemon.weight}</span>
                <br />
                <br />
                Types: 
               {pokemon.types
                ? pokemon.types.map((type, i) => <p key={i}>{type}</p>)   // map por si tiene mas de un type
                : pokemon.types
              }
            </div>
      </div>
    )}
}  



export default PokemonDetail;