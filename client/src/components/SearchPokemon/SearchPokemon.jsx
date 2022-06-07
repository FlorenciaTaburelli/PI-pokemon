// import React from 'react';
import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { getPokemonByName, searchPokemon } from '../../redux/actions'
import './SearchPokemon.css'


function SearchPokemon() {


  const dispatch = useDispatch();
  

  const [name, setName] = useState('')

  useEffect(() => {
    dispatch(searchPokemon(name))   //// crear nueva action que filtre aquellos que coincidan
  }, [name])


  function handleClick(e){
    e.preventDefault()
    dispatch(getPokemonByName(name))
    setName('')
  }

  function handleChange(e){
    setName(e.target.value)
    if(e.keyCode === 13){
        e.preventDefault()
        dispatch(getPokemonByName(name))
        setName('')
    }
  }

  

    return (
      <div className="search">
          <input 
            className='search-pokemon-input'
            placeholder='Search Pokemon' 
            onChange={(e) => handleChange(e)}
            type="text"
            value={name} />
          <button onClick={(e) => handleClick(e)}  className='search-button'>Go found it!</button>
      </div>
    )
  };

 

export default connect(null, { getPokemonByName })(SearchPokemon);