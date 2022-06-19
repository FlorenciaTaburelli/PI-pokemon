import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { resetPokemonById, getPokemonById } from '../../redux/actions'
import './CardDetail.css'
import randomQuoteGen from './randomQuote'
import axios from 'axios';


function CardDetail({name, img, speed, height, weight, types, attack, defense, hp}) {

  name =  name.charAt(0).toUpperCase() + name.slice(1)

  const [quote, setQuote] = useState([])
  
  useEffect(async () => {
    setQuote(await randomQuoteGen())
  }, [])


return (
    <div className='container-card-detail'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>

          
            <div className='img-container'>
                <img src={img} alt={name} className='img-detail' />
            </div>
            <div className='types-name-container'>
            {types && types.map((p, i) => <img src={`/types/${p}.png`} title={p} alt={p} key={i} className='img-types'/>)}
                <span className='name-created'><i>{name}</i></span>
            </div>

            <div className='container-personal'>
                <div className='p-height'>
                    <span>Height: <i>{height}cm</i></span>
                </div>
                <div className='p-weight'>
                    <span>Weight: <i>{weight}kg</i></span>
                </div>
            </div>

            <div className='container-info'>
                <div className='container-hp'>
                    <p className='p-hp'>HP</p>
                    <p className='p-hp-data'>{hp}</p>
                </div>
                <hr />
                <div className='container-attack'>
                    <p className='p-attack'>ATTACK</p>
                    <p className='p-attack-data'>{attack}</p>
                </div>
                <hr />
                <div className='container-attack'>
                    <p className='p-attack'>DEFENSE</p>
                    <p className='p-attack-data'>{defense}</p>
                </div>
                <hr />
                <div className='container-speed'>
                    <p className='p-speed'>SPEED</p>
                    <p className='p-speed-data'>{speed}</p>
                </div>
            
                 </div>
            </div>
            <div className='flip-card-back'>
                <p className='p-quotes'><i>{`" ${quote[0]} "`}</i></p>
                <hr className='hr-size'/>
                <p className='p-quotes'><i>{`" ${quote[1]} "`}</i></p>
                {/* {quote && quote.map((quote, i) => <p className='p-quotes' key={i}><i>{`" ${quote} "`}</i></p>)} */}
                
            </div>
        </div>
    </div>
    
)

}  



export default CardDetail;