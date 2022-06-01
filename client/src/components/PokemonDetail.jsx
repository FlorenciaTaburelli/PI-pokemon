import { getPokemonById } from '../redux/actions'
import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { resetPokemonById } from '../redux/actions'


function PokemonDetail() {
  // const dispatch = useDispatch();
  // const params = useParams(); //Para obtener el ID por Params
  // const onePokemon = useSelector((state) => state.pokemonById);

  // useEffect(() => {
  //   dispatch(getPokemonById(params.id));
  //   dispatch(resetPokemonById());
  // }, [dispatch, params.id]);

  // if (!onePokemon.name) {
  //   return (
  //     <div >
  //       ... Loading
  //     </div>
  //   );
  // } else if (onePokemon.length !== 0) {
  //   console.log(onePokemon);
  //   return (
  //     <div>
        
  //       <div class="background">
  //         <div class="cardsDetails">
  //           <div>
  //             <h3 class="pokeName">
  //               {`#${onePokemon.id}:`} {onePokemon.name}
  //             </h3>
  //             <img
  //               src={onePokemon.image}
  //               alt={onePokemon.name}
  //               class="pokeImage"
  //             />
  //           </div>
  //           <div class="types">
  //             {onePokemon.types
  //               ? onePokemon.types.map((e) => "  " + e).join(" - ")
  //               : onePokemon.types}
  //           </div>
  //           <div class="description">
  //             <div>
  //               <h4>{`HP: ${onePokemon.hp}`}</h4>
  //             </div>
  //             <div>
  //               <h4>{`ATTACK: ${onePokemon.attack}`}</h4>
  //             </div>
  //             <div>
  //               <h4>{`DEFENSE: ${onePokemon.defense}`}</h4>
  //             </div>
  //             <div>
  //               <h4>{`SPEED: ${onePokemon.speed}`}</h4>
  //             </div>
  //             <div>
  //               <h4>{`HEIGHT: ${onePokemon.height}`}</h4>
  //             </div>
  //             <div>
  //               <h4>{`WEIGHT: ${onePokemon.weight}`}</h4>
  //             </div>
  //           </div>
  //         </div>
          
  //       </div>
        
  //     </div>
  //   );
  // } else if (!onePokemon.length) {
  //   return (
  //     <div>
  //         Error page
  //     </div>
  //   );
  // }
//////////////////---------------------------------------------------
const param = useParams()
const dispatch = useDispatch()
const pokemon = useSelector((state) => state.pokemonById)
const pokemonByName = useSelector((state) => state.pokemonByName);

useEffect(() => {
  dispatch(getPokemonById(param.id))
  resetPokemonById()
}, []);


/*

attack: 82
defense: 83
height: 20
hp: 80
id: 3
img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
name: "venusaur"
speed: 80
types: (2) ['grass', 'poison']
weight: 1000
 */
    return (
      <div className="Home">
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
    );
}  



export default PokemonDetail;