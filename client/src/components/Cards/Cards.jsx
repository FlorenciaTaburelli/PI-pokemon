import React, { useEffect, useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import './Cards.css'
import { getAllPokemons, getTypes, resetPokemonById, resetNewPokemon } from '../../redux/actions'
import PokeCard from "../PokeCard/PokeCard";
import Paginacion from "../Paginacion/Paginacion";
import loading from '../../imag/nuevo.gif'
import PokemonFound from '../PokemonFound/PokemonFound'
import axios from "axios";
import catBoots from '../../imag/cat-boots.png'

function Cards() {

  const dispatch = useDispatch();
  let pokes = useSelector((state) => state.pokemons);
  //const liveSearch = useSelector((state) => state.liveSearch)
  const pokemonFound =  useSelector((state) => state.pokemonByName)
  
  const [ currentPage , setCurrentPage] = useState(1)   /// pagina actual
  const [items, setItems] = useState(12)  // cantidad de pokemons por pagina
  
  const [allPokemons, setAllPokemons] = useState([]) 

  const [noTypes, setNoTypes] = useState('') // muestra mensaje si no se encuentran pokemones de ese tipo
  const [msgDelete, setMsgDelete] = useState('')
  const [idDeleted, setIdDeleted] = useState(0)
  const [divDisabled, setDivDisabled] = useState(false)

console.log(divDisabled)

  const max = Math.ceil(allPokemons.length / items) /// max solo muestra el total de paginas
  

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getTypes())
    dispatch(resetPokemonById())
    dispatch(resetNewPokemon())
  }, [dispatch]);

  useEffect(() => {  
    setAllPokemons(pokes)
  },[pokes]);

/// ------------- ORDER BY NAME --------------------------------
function orderByName(boolean){   
  boolean ? setAllPokemons([...allPokemons.sort((a, b) => a.name.localeCompare(b.name))])
  :
  setAllPokemons([...allPokemons.sort((a, b) => b.name.localeCompare(a.name))])
};

/// ------------- ORDER BY ATTACK ------------------------------
function orderByAttack(boolean){    /// FUNCION QUE ENVIO POR PARAMS A PAGINATION PARA RECIBIR TRUE/FALSE LUEGO DE PRESIONAR UN BOTON
  boolean ? setAllPokemons([...allPokemons.sort((a, b) => b.attack - a.attack)])
  :
  setAllPokemons([...allPokemons.sort((a, b) => a.attack - b.attack)])
};

// -------------------- FILTER BY TYPE --------------------
function filterByType (type) {
  if(type === 'All Pokemons'){
    setAllPokemons(pokes)
    setNoTypes('')
  }else{
    const filt = pokes.filter(poke => poke.types.find(t => t.toLowerCase() === type.toLowerCase()))
    if(filt.length > 0){
      setNoTypes('')
      setAllPokemons(filt)
    }
    if(filt.length === 0 && noTypes.length >= 0){
      setNoTypes('No pokemon of that type found')
    }
  }
  
};

/// ------------- FILTER BY CREATED ------------------------------
function filterByCreated(boolean){
  if(boolean === 'allPokemons'){
    setAllPokemons(pokes)
  }
    else if(boolean === 'created') {
    const created = pokes.filter(poke => poke.createdPokemon)
    console.log(created)
    created.length > 0 ? setAllPokemons(created) : setNoTypes('No pokemons created yet')
    }
    else{
      setNoTypes('')
      const notCreated = pokes.filter(poke => !poke.createdPokemon)
      if(notCreated.length > 0) setAllPokemons(notCreated)
    }
};

// --------------- RESET POKEMONS --------------------------------
function resetFilter(){  /// FUNCION QUE PASO POR PARAMS PARA VOLVER A MOSTRAR TODOS LOS POKEMONES
  dispatch(getAllPokemons())
  setNoTypes('')
};


//--------------- DELETE POKEMON  --------------------------------

 function openMsgDelete(id){  // se ejecuta en PokeCard con el id del pokemon
  // habilita la clase 'show'
  setDivDisabled(true)
  setIdDeleted(id)
 }
 
function handleDelete(e){
    e.preventDefault()
    axios.delete(`http://localhost:3001/delete-pokemons/${idDeleted}`)
    .then(() => setMsgDelete('Delete successful'))
    setAllPokemons(allPokemons.filter(poke => poke.id !== idDeleted));
    // dispatch(getAllPokemons())
    setDivDisabled(false)
}

function handleNoDelete(e){
  e.preventDefault();
  setDivDisabled(false)
}

/// ------------- LIVE SEARCH -------------
// useEffect(() => {
//   if(liveSearch.length > 0) setAllPokemons(liveSearch);   /// SETEO LO QUE MUESTRO CON LO QUE TRAIGO DEL ESTADO DE REDUX
// }, [liveSearch]);


if (allPokemons.length === 0) {
    return (
      <div className="loading">
        <img src={loading} alt="Loading" />
        <p className="cards-loading"><i>Loading...</i></p>
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

          {noTypes.length > 0 && <p className='msg-no-types'><i>{`- ${noTypes} -`}</i></p>}

          

          {pokemonFound.name || pokemonFound.msg ? <PokemonFound name={pokemonFound.name} msg={pokemonFound.msg}/>
          : <div className="allCards">
                  {allPokemons && allPokemons.slice((currentPage * items) - items, (currentPage * items)).map(poke => {
                    return( //                         1*12-12 = 0                      1*12 = 12
                    <PokeCard
                      name={poke.name}
                      img={poke.img}
                      id= {poke.id}
                      types={poke.types}
                      key={poke.name}
                      delete={openMsgDelete}
                      created={poke.createdPokemon}/>
                      
                    )
                    })
                  }
          </div>
          }

          <div  className={divDisabled ? 'show-delete' : "container-delete"}>
            <div className='delete-confirm'>
              <div className="question-confirm">
                  <button className="btn-no-delete" onClick={(e) => handleNoDelete(e)}>NO</button>
                  <p className="p-delete">Are you sure u want to delete me?</p>
                  <button className="btn-yes-delete" onClick={(e) => handleDelete(e)}>YES</button>
              </div>
              <img src={catBoots} alt="Delete" className="img-delete"/>
            </div>
          </div>
          
    </div>
  )}

}



export default Cards;