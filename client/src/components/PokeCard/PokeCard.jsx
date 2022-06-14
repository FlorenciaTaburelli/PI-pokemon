import './PokeCard.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function PokeCard(props) {

  const types = useSelector((state) => state.types)

// grey, red, brown, purple, green, blue, yellow, orange, pink
  const colorTypes = {
    normal: 'linear-gradient(to bottom, #f8833e, #fa8e4e, #fc995e, #fea36e, #ffae7e)',  // grey
    fighting: 'linear-gradient(to bottom, #fb4949, #fb5857, #fb6665, #fa7373, #f88080)',  // red
    flying: 'linear-gradient(to bottom, #b27935, #bd8841, #c8984d, #d2a85a, #ddb867)', // brown
    poison: 'linear-gradient(to bottom, #a75a94, #ba6ea8, #cd82bd, #e096d2, #f3abe7)', // purple
    ground: 'linear-gradient(to bottom, #b27935, #bd8841, #c8984d, #d2a85a, #ddb867)', // brown
    rock: 'linear-gradient(to bottom, #989998, #a1a4a2, #abaeab, #b4b9b5, #bec4bf)',  //grey
    bug: 'linear-gradient(to bottom, #699e73, #7db086, #91c199, #a6d4ad, #bbe6c1)',   // green
    ghost: 'linear-gradient(to bottom, #3ec7f8, #5dcdf7, #75d3f6, #8ad8f5, #9ddef5)',  //blue
    steel: 'linear-gradient(to bottom, #989998, #a1a4a2, #abaeab, #b4b9b5, #bec4bf)',  // grey
    fire: 'linear-gradient(to bottom, #fb4949, #fb5857, #fb6665, #fa7373, #f88080)',  // red
    water: 'linear-gradient(to bottom, #3ec7f8, #5dcdf7, #75d3f6, #8ad8f5, #9ddef5)',  // blue
    grass: 'linear-gradient(to bottom, #699e73, #7db086, #91c199, #a6d4ad, #bbe6c1)',  // green
    electric: 'linear-gradient(to bottom, #eee85a, #f0ed6a, #f3f279, #f5f688, #f8fb96)', // yellow
    psychic: 'linear-gradient(to bottom, #fb4949, #fb5857, #fb6665, #fa7373, #f88080)', // red
    ice: 'linear-gradient(to bottom, #3ec7f8, #5dcdf7, #75d3f6, #8ad8f5, #9ddef5)',  // blue
    dragon: 'linear-gradient(to bottom, #fb4949, #fb5857, #fb6665, #fa7373, #f88080)', // red
    dark: 'linear-gradient(to bottom, #989998, #a1a4a2, #abaeab, #b4b9b5, #bec4bf)', // grey
    fairy: 'linear-gradient(to bottom, #fb6cc4, #fb77c8, #fb82cd, #fb8cd1, #fb96d5)', // pink
    unknown: 'linear-gradient(to bottom, #989998, #a1a4a2, #abaeab, #b4b9b5, #bec4bf)',  // grey
    shadow: 'linear-gradient(to bottom, #989998, #a1a4a2, #abaeab, #b4b9b5, #bec4bf)'  // grey
  }

  
 
    return (
      <Link to={`/pokemons/${props.id}`} 
      className="pokemonCard"  
      style={{
      backgroundImage: colorTypes[props.types[0]]}} >

        <div className="inside">
              <h4 className="name">{props.name}</h4>
              <div className='image'>
                <img src={props.img} alt={props.name} className='imagen'/>
              </div>
              
              {props.types.map((type, i) => <p key={i} 
              className='type'
              >{type}</p>)}
          </div>
      </Link>
    );
}  



export default PokeCard;