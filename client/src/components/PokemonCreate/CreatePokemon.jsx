
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon } from '../../redux/actions';
import NewPokemon from './NewPokemon';

import validate from './validations'

/// VALIDACIONES , MOSTRAR LOS TIPOS ELEGIDOS Y PODER QUITARLOS

const CreatePokemon = () => {
   

   const [newPokemon, setNewPokemon] = useState({
      name: '',
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      types: []
   })


   const [ errors, setErrors ] = useState({})
   
   const dispatch = useDispatch();
   const types = useSelector((state) => state.types)
   const pokemonCreated = useSelector((state) => state.newPokemon)
    

   function handleSubmit(e){
      e.preventDefault();
      dispatch(createPokemon(newPokemon))
   }
   function handleChange(e){
      setNewPokemon({
         ...newPokemon,
         [e.target.name]: e.target.value
      });
      setErrors(validate({
         ...newPokemon,
         [e.target.name]: e.target.value 
      }))
   }

   function handleSelect(e){
      setNewPokemon({
         ...newPokemon,
         types: [...newPokemon.types, e.target.value]
      });
      setErrors(validate({
         ...newPokemon,
         types: [...newPokemon.types, e.target.value]
      }))
   }
   
  return (
      <div>
         {pokemonCreated.name ? 
            <NewPokemon/>
         :
         <form onSubmit={handleSubmit}>
               <label>Give me a name! <input type='text'   name='name' onChange={handleChange} placeholder='Name...'/></label>
               {errors.name && (<p>{errors.name}</p>)}
               <label>Stayin’ alive <input type='number'  name='hp' onChange={handleChange} placeholder='HP...'/></label>
               <label>How strong i'm? <input type='number'  name='attack'  onChange={handleChange} placeholder='Attack...'/></label>
               <label>Can't mess with me <input type='number' name='defense'  onChange={handleChange} placeholder='Defense...'/></label>
               <label>I'm this fast! <input type='number'  name='speed'  onChange={handleChange} placeholder='Speed...'/></label>
               <label>I'm this tall! <input type='number'  name='height'  onChange={handleChange} placeholder='Height...'/></label>
               <label>I'm this heavy! <input type='number'  name='weight'  onChange={handleChange} placeholder='Weight...'/></label>
               Pick at least one type please!
               <select onChange={(e) => handleSelect(e)} id="select-types" multiple="multiple" value={newPokemon.types}>
               {types.map((e) => (
                     <option  value={e} key={e}>{e}</option>
                  ))}
               </select>
               {errors.types && (<p>{errors.types}</p>)}
               {newPokemon.name.length === 0 || newPokemon.types.length === 0 ? <button type='submit' disabled >Create Pokemon</button>
               : <button type='submit'>Create Pokemon</button>
               } 
            </form>
         
         }
         
      </div>
   );
};
//"normal",
// "fighting",
// "flying",
// "poison",
// "ground",
// "rock",
// "bug",
// "ghost",
// "steel",
// "fire",
// "water",
// "grass",
// "electric",
// "psychic",
// "ice",
// "dragon",
// "dark",
// "fairy",
// "unknown",
// "shadow"
export default CreatePokemon;
