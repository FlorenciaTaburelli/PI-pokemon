import React, { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Cards.css'
import { getAllPokemons, getTypes, resetPokemonById, resetNewPokemon } from '../../redux/actions'
import PokeCard from "../PokeCard/PokeCard";
import Paginacion from "../Paginacion/Paginacion";
import loading from '../../imag/pokeball-png.gif'
import PokemonFound from '../PokemonFound/PokemonFound'

function Cards() {

  const dispatch = useDispatch();
  let pokes = useSelector((state) => state.pokemons);
  //const liveSearch = useSelector((state) => state.liveSearch)
  const pokemonFound =  useSelector((state) => state.pokemonByName)
  
  const [ currentPage , setCurrentPage] = useState(1)   /// pagina actual
  const [items, setItems] = useState(12)  // cantidad de pokemons por pagina
  
  const [allPokemons, setAllPokemons] = useState([])  // cantidad de pokemons por pagina
  const [noTypes, setNoTypes] = useState('') // muestra mensaje si no se encuentran pokemones de ese tipo

  const max = Math.ceil(allPokemons.length / items) /// max solo muestra el total de paginas
  

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypes())
    dispatch(resetPokemonById())
    dispatch(resetNewPokemon())
  }, [dispatch]);

  useEffect(() => {  // CARGO EN EL ESTAD LOCAL TODOS LOS POKEMONES DEL REDUCER
    setAllPokemons(pokes)
  },[pokes]);

/// ------------- ORDER BY NAME --------------------------------
function orderByName(boolean){    /// FUNCION QUE ENVIO POR PARAMS A PAGINATION PARA RECIBIR TRUE/FALSE LUEGO DE PRESIONAR UN BOTON
  boolean ? setAllPokemons([...pokes.sort((a, b) => a.name.localeCompare(b.name))])
  :
  setAllPokemons([...pokes.sort((a, b) => b.name.localeCompare(a.name))])
};

/// ------------- ORDER BY ATTACK ------------------------------
function orderByAttack(boolean){    /// FUNCION QUE ENVIO POR PARAMS A PAGINATION PARA RECIBIR TRUE/FALSE LUEGO DE PRESIONAR UN BOTON
  boolean ? setAllPokemons([...pokes.sort((a, b) => b.attack - a.attack)])
  :
  setAllPokemons([...pokes.sort((a, b) => a.attack - b.attack)])
};

// -------------------- FILTER BY TYPE --------------------
function filterByType (type) {
  const filt = pokes.filter(poke => poke.types.find(t => t === type))
  if(filt.length > 0){
    setAllPokemons(filt)
  }
 if(filt.length === 0 && noTypes.length === 0){
    setNoTypes('No se encontraron pokemones de ese tipo')
  }
  if (noTypes.length > 0) setNoTypes('')
};

/// ------------- FILTER BY CREATED ------------------------------
function filterByCreated(boolean){
  if(boolean) {
    const created = pokes.filter(poke => poke.createdPokemon)
     if(created.length > 0) setAllPokemons(created)
  }else{
    const notCreated = pokes.filter(poke => !poke.createdPokemon)
    if(notCreated.length > 0) setAllPokemons(notCreated)
  }
};

// --------------- RESET POKEMONS --------------------------------
function resetFilter(){  /// FUNCION QUE PASO POR PARAMS PARA VOLVER A MOSTRAR TODOS LOS POKEMONES
  dispatch(getAllPokemons())
  setNoTypes('')
};

/// ------------- LIVE SEARCH -------------
// useEffect(() => {
//   if(liveSearch.length > 0) setAllPokemons(liveSearch);   /// SETEO LO QUE MUESTRO CON LO QUE TRAIGO DEL ESTADO DE REDUX
// }, [liveSearch]);


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
          currentPage={currentPage}   /// PAGINATION
          setCurrentPage={setCurrentPage}
          max={max}

          orderByName={orderByName}  //    function Order By Name
          filterByCreated={filterByCreated} // function Filter by Created
          orderByAttack={orderByAttack} /// function order by attack
          filterByType={filterByType}  // filterByType={filterByType}  /// FILTRO POR TYPE
          resetFilter={resetFilter} // function reset original array
          />

          {noTypes.length > 0 && <p>{noTypes}</p>}

          {pokemonFound.name || pokemonFound.msg ? <PokemonFound name={pokemonFound.name} msg={pokemonFound.msg}/>
          : <div className="allCards">
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
          }
          
    </div>
  )}

}



export default Cards;