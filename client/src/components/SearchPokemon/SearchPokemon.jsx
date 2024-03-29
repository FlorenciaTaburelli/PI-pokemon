// import React from 'react';
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getPokemonByName, searchPokemon } from '../../redux/actions'
import './SearchPokemon.css'


function SearchPokemon() {


  const dispatch = useDispatch();
  

  const [name, setName] = useState('')

  // useEffect(() => {
  //   dispatch(searchPokemon(name))   //// DISPATCH PARA BUSQUEDA EN VIVO
  // }, [name])


  function handleClick(e){
    e.preventDefault()
    dispatch(getPokemonByName(name))
    setName('')
  }

  // function handleChange(e){
  //   setName(e.target.value)
  // }

  const handleKeyDown = (event) => {
    setName(event.target.value)
    if (event.key === 'Enter') {
      handleClick(event)
    }
  }

    return (
      <div className="search">
          <input 
            className='search-pokemon-input'
            placeholder='Search Pokemon' 
            onKeyDown={handleKeyDown}
            onChange={(e) => handleKeyDown(e)}
            type="text"
            value={name} />
          <button onClick={(e) => handleClick(e)}  className='search-button' id='button-search'>Go found it!</button>
      </div>
    )
  };

 

export default SearchPokemon;