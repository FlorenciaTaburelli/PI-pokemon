import { useState  } from 'react'
import './Paginacion.css'
import { useSelector } from 'react-redux'

                          
function Paginacion ({ currentPage, setCurrentPage, max, orderByName, filterByCreated, resetFilter, orderByAttack, filterByType }){

  
    const [type, setType] = useState('')
    const types = useSelector((state) => state.types)


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
     //e.preventDefault();
     if(e.target.value === 'original'){
        filterByCreated(false)
     }else{
        filterByCreated(true)
     }
     
 }

 ///------------- RESET BUTTON --------------------------------
 function resetAll(e){
     e.preventDefault();
     resetFilter()     /// Ejecuto esta funcion de Cards que vuelve a setear AllPokemons con el array original
     setType('') 
 }


 //  -------------------- ORDER BY NAME ------------------------------

 function handleOrder(e){
    if(e.target.value === 'a-z') orderByName(true)
    if(e.target.value === 'z-a') orderByName(false)
    if(e.target.value === 'highAttack')  orderByAttack(true)
    if(e.target.value === 'lowAttack')  orderByAttack(false)
}


///------------- FILTER BY TYPES --------------------------------
function handleSelect(e) {
    filterByType(e.target.value)
}

    return(
        <div className='pagination-container'>

            <button onClick={e => resetAll(e)} className='pagination-reset'>RESET</button>

            <div className='container-filter'>
            <select onChange={(e) => handleSelect(e)}  value={type}  name='types' className='filter-types'>
                 <option value="" disabled hidden>Filter By Type</option>
                 <option value="All Pokemons" >All Pokemons</option>
                    {types.map((e) => (
                    <option  value={e} key={e}>{e}</option>  // genero un tag <option> por cada type
                    ))}
                
            </select>
           
            <select onChange={(e) => filterCreated(e)}  value={type} name='created' className='filter-types'>
                <option value="" disabled hidden>Filter By Origin</option>
                <option value="original">Original</option>
                <option value="created">Created</option>    
            </select>
            </div>
            
            <div className='container-btn-pagination'>
            <button onClick={(e) => prevHandler(e)}  className='pagination-button'>Prev</button>
            <span className='text'>Page: {currentPage} of {max}</span>
            <button onClick={(e) => nextHandler(e)} className='pagination-button'>Next</button>
            </div>

            <select onChange={(e) => handleOrder(e)}  value={type} name='orderBy' className='filter-types'>  
                <option value="" disabled hidden>Sort by </option>
                <option value="a-z">A - z</option>
                <option value="z-a">Z - a</option>    
                <option value="highAttack">Highest attack</option>
                <option value="lowAttack">Lower attack</option>   
            </select>
        </div>
    )
}

export default Paginacion