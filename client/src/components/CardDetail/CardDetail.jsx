import { useEffect } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { resetPokemonById, getPokemonById } from '../../redux/actions'
import './CardDetail.css'



function CardDetail({name, img, speed, height, weight, types, attack, defense, hp}) {
//console.log( speed, height, weight,  attack, defense, hp)
  //  const pokemon = useSelector((state) => state.newPokemon)
  name =  name.charAt(0).toUpperCase() + name.slice(1)

console.log('cardDetail', types)


console.log(`types/${types[0]}.png`)

return (
    <div className='container-card-detail'>
        <div className='img-container'>
            <img src={img} alt={name} className='img-detail' />
        </div>
        <div className='types-name-container'>
            {types.map(t=> console.log(t))}
           {types && types.map((p, i) => <img src={`/types/${p}.png`} alt={p} key={i} className='img-types'/>)}
            <span className='name-created'>{name}</span>
        </div>

        <div className='container-personal'>
            <div className='p-height'>
                <span>Height: {height}</span>
            </div>
            <div className='p-weight'>
                <span>Weight: {weight}</span>
            </div>
        </div>

        <div className='container-info'>
            <div className='p-hp'>
                <p>HP</p>
                <p>{hp}</p>
            </div>
            <hr />
            <div className='p-attack'>
                <p>Attack</p>
                <p>{attack}</p>
            </div>
            <hr />
            <div className='p-defense'>
                <p>Defense</p>
                <p>{defense}</p>
            </div>
            <hr />
            <div className='p-speed'>
                <p>Speed</p>
                <p>{speed}</p>
            </div>
           
        </div>
        {/* <img src={`types/${p}.png`} /> */}
    </div>
)

}  



export default CardDetail;