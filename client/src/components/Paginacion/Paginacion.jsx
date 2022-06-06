import { useState } from 'react'
import './Paginacion.css'
////                      1                                      
function Paginacion ({ currentPage, setCurrentPage, max }){

//// 
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


    return(
        <div className='pagination-container'>
            <button onClick={(e) => prevHandler(e)}  className='pagination-button'>Prev</button>
            <span className='text'>Page: {currentPage} of {max}</span>
            <button onClick={(e) => nextHandler(e)} className='pagination-button'>Next</button>
        </div>
    )
}

export default Paginacion