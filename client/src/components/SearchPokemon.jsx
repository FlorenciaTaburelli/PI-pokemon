// import React from 'react';
import { connect, useDispatch } from "react-redux";
import { useState } from 'react';
import { getPokemonByName } from '../redux/actions'



function SearchPokemon() {


  const dispatch = useDispatch();
  

  const [name, setName] = useState('')



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
            placeholder='Search Pokemon' 
            onChange={(e) => handleChange(e)}
            type="text"
            value={name} />
          <button onClick={(e) => handleClick(e)}>Go found it!</button>
      </div>
    )
  };

 

export default connect(null, { getPokemonByName })(SearchPokemon);