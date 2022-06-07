import React, { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Cards.css'
import { getAllPokemons  } from '../redux/actions'
import PokeCard from "./PokeCard/PokeCard";
import Paginacion from "./Paginacion/Paginacion";
import loading from '../imag/pokeball-png.gif'

function Cards() {

  const dispatch = useDispatch();
  let allPokemons = useSelector((state) => state.pokemons);
  const liveSearch = useSelector((state) => state.liveSearch)
  const pokemonByName = useSelector((state) => state.pokemonByName);
 // const [ loading, setLoading ] = useState(false)
  const [ currentPage , setCurrentPage] = useState(1)   /// pagina actual
  const [items, setItems] = useState(12)  // cantidad de pokemons por pagina

 const max = Math.ceil(allPokemons.length / items) /// 

  // useEffect(() => {
  //   //setLoading(true)
  //   dispatch(getAllPokemons())
  //   //setLoading(false)
  // }, []);

//const pokemons = []
if(liveSearch.length > 0) allPokemons = liveSearch;


if (allPokemons.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="Loading" />
        <p className="cards-loading">Loading...</p>
      </div>
)}else{
  return (
    <div className="contenedor">
          <Paginacion currentPage={currentPage} setCurrentPage={setCurrentPage} max={max} />
          <div className="allCards"> 
                  {allPokemons && allPokemons.slice((currentPage * items) - items, (currentPage * items)).map(poke => {
                    return( //                         1*12-12 = 0                      1*12 = 12
                     <PokeCard 
                       name={poke.name} 
                       img={poke.img}
                       id= {poke.id}
                       types={poke.types}
                       key={poke.name}/>
                    ) 
                    })
                  }
        </div>
    </div>
  )}
   
}  



export default Cards;