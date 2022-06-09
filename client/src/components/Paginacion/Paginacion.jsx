import { useState } from 'react'
import './Paginacion.css'
import { useSelector, useDispatch } from 'react-redux'
import { filterByCreated, orderName, resetFiterCreated, getAllPokemons, resetOrderByName } from '../../redux/actions'

////                      1                                      
function Paginacion ({ currentPage, setCurrentPage, max, orderByName, order, filtCreated, resetFilter }){

  //  const allPokemons = useSelector((state) => state.pokemons)
    const dispatch = useDispatch()
    const [ created, setCreated ] = useState(false)
    const [ nameOrder, setNameOrder ] = useState(true)

    const pokemonsCreated = useSelector((state) => state.pokemonsCreated)
/// 

 //// ------------- PAGINATION  --------------------------------   

   function prevHandler(e){
        e.preventDefault();
        if(currentPage > 1){
            setCurrentPage(currentPage - 1); 
        }
        
    }

    function nextHandler(e){
        e.preventDefault();
        if(currentPage < max){
            setCurrentPage(currentPage + 1);  
        }
        
    };

    
//// ------------- FILTER BY CREATED  --------------------------------   
 function filterCreated(e){
     e.preventDefault();
     setCreated(!created)
     dispatch(filterByCreated(created))
    // filtCreated()
 }

 function resetFiterByCreated(e){
     e.preventDefault();
     resetFilter()
    // dispatch(resetFiterCreated())
 }


 //  -------------------- ORDER BY NAME ------------------------------

 
 function handleOrder(e){
     e.preventDefault();
     setNameOrder(!nameOrder)
    // orderByName(nameOrder)
     order(nameOrder)
    dispatch(orderName(nameOrder))
    //dispatch(resetOrderByName())
  
 }

///[ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza

    return(
        <div className='pagination-container'>
            {pokemonsCreated.length > 0 && <button onClick={e => resetFiterByCreated(e)}>Get All</button>}
            <button onClick={(e) => filterCreated(e)}>{!created ? 'Original Pokemons': 'Pokemons Created'}</button>
            <button onClick={(e) => prevHandler(e)}  className='pagination-button'>Prev</button>
            <span className='text'>Page: {currentPage} of {max}</span>
            <button onClick={(e) => nextHandler(e)} className='pagination-button'>Next</button>
            <button onClick={(e) => handleOrder(e)}>{!nameOrder ? 'A - Z': 'Z - A'}</button> 
            <button>Order by Attack</button> 
        </div>
    )
}

export default Paginacion