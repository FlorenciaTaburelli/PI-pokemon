import { useEffect } from 'react'
import {useParams, Link} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { resetPokemonById, getPokemonById } from '../../redux/actions'
import loading from '../../imag/pokeball-png.gif'
import CardDetail from '../CardDetail/CardDetail';
import './PokemonDetail.css'

function PokemonDetail() {
 const param = useParams()
 const dispatch = useDispatch()

 const pokemon = useSelector((state) => state.pokemonById)
 const pokemonByName = useSelector((state) => state.pokemonByName);
 


useEffect(() => {
 /// dispatch(resetPokemonById())
  dispatch(getPokemonById(param.id))
}, []);

if (!pokemon.name) {
    return (
      <div className="loading">
        <img src={loading} alt="Loading" />
        <p className="cards-loading">Loading...</p>
      </div>
)}else{
    return (
      <div className="container-detail">
        <div className="card-container">
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
        </div>
        <Link to={'/home/'} className='btn-go-home-detail'>Go Home!</Link>
          {/* <img src={pokemon.img} alt={pokemon.name} />
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
               {pokemon.types && pokemon.types.map((type, i) => <p key={i}>{type}</p>)}
            </div> */}
      </div>
    )}
}  



export default PokemonDetail;