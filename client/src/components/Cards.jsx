import React, { useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllPokemons  } from '../redux/actions'
import PokeCard from "./PokeCard";


function Cards() {

  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemons);

  useEffect(() => {
    dispatch(getAllPokemons())
  }, []);

  //console.log(allPokemons.map(poke => poke.name))

  return (
    <div className="Cards">
       allPokemons
          <div className="allCards">
                    {allPokemons && allPokemons.map(poke => {
                       return(
                        <PokeCard 
                          name={poke.name} 
                          img={poke.img}
                          id= {poke.id}
                          key={poke.name}/>
                       ) 
                       }
                    )} 
        </div>
    </div>
  )
   
}  



export default Cards;