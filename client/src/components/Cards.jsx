import React, { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Cards.css'
import { getAllPokemons, getTypes  } from '../redux/actions'
import PokeCard from "./PokeCard/PokeCard";
import Paginacion from "./Paginacion/Paginacion";
import loading from '../imag/pokeball-png.gif'

function Cards() {

  const dispatch = useDispatch();
  let pokes = useSelector((state) => state.pokemons);
  const liveSearch = useSelector((state) => state.liveSearch)
  const pokemonsCreated = useSelector((state) => state.pokemonsCreated);
  //const pokemonsByName = useSelector((state) => state.pokemonsInOrder)
  const [ currentPage , setCurrentPage] = useState(1)   /// pagina actual
  const [items, setItems] = useState(12)  // cantidad de pokemons por pagina

  const [allPokemons, setAllPokemons] = useState([])  // cantidad de pokemons por pagina
 

  const [created, setCreated] = useState([]) // FILTRO CREADOS/ORIGINALES

  const boolean = useSelector((state) => state.boolean);

console.log(allPokemons)

 const max = Math.ceil(allPokemons.length / items) /// 

//  useEffect(() => {
//   //setLoading(true)
//   dispatch(getAllPokemons())
//   dispatch(getTypes())
  
//   //setLoading(false)
// }, [dispatch]);

 useEffect(() => {
 setAllPokemons(pokes)
 //setAllPokemons(allPokemons.sort((a, b) => a.name.localeCompare(b.name)))
},[pokes])


function order(boolean){
  boolean ? setAllPokemons(allPokemons.sort((a, b) => a.name.localeCompare(b.name)))  
   : setAllPokemons(allPokemons.sort((a, b) => b.name.localeCompare(a.name)))
};

// const filtCreated = () => {
//   if(pokemonsCreated.length > 0){
//     setAllPokemons(pokemonsCreated)
//   }
// }

useEffect(() => {
if(pokemonsCreated.length > 0)  setAllPokemons(pokemonsCreated)
}, [pokemonsCreated])

  

function resetFilter(){
  setAllPokemons(pokes)
}
// console.log(pokes)
// console.log(pokemonsCreated)
// const filterCreated = allPokemons? state.pokemons.filter(poke => poke.createdPokemon) 
// : state.pokemons.filter(poke => !poke.createdPokemon)

// console.log(filterCreated)
//setAllPokemons(allPokemons.sort((a, b) => a.name.localeCompare(b.name)))
// const orderByName = (boolean) => { orderByName={orderByName}
//   console.log(boolean)
//   boolean === true ? setAllPokemons(allPokemons.sort((a, b) => a.name.localeCompare(b.name)))  
//   : setAllPokemons(allPokemons.sort((a, b) => b.name.localeCompare(a.name)))
//  console.log(allPokemons)
// }

//////////----  ----------------
//   boolean  ? allPokemons = allPokemons.sort((a, b) => a.name.localeCompare(b.name))
//   : allPokemons = allPokemons.sort((a, b) => b.name.localeCompare(a.name))

// //  if(liveSearch.length > 0) setAllPokemons(liveSearch);
// if(liveSearch.length > 0) allPokemons = liveSearch;
//if(pokemonsCreated.length > 0) setAllPokemons(pokemonsCreated) ;

// if(pokemonsCreated.length > 0) allPokemons = pokemonsCreated;



if (allPokemons.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="Loading" />
        <p className="cards-loading">Loading...</p>
      </div>
)}else{
  return (
    <div className="contenedor">
          <Paginacion 
          currentPage={currentPage}  
          setCurrentPage={setCurrentPage} 
          max={max} 
          order={order}  //         function Order By Name
          //filtCreated={filtCreated} // function Filter by Created
          resetFilter={resetFilter}  // function reset original array
          />
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