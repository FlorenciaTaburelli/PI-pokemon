
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getAllPokemons } from '../../redux/actions';
import NewPokemon from './NewPokemon';
import validate from './validations';
import './CreatePokemon.css'
import background from '../../imag/formulario.png'

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
   const allPokemons = useSelector((state) => state.pokemons)

  
  const nameFound = allPokemons.find(p => p.name === newPokemon.name)  // Busco que el nombre ingresado no exista en la lista de pokemones

   

   function handleSubmit(e){
      e.preventDefault();
      dispatch(createPokemon(newPokemon))
      dispatch(getAllPokemons())
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
   };

   function handleDeleteSelection(e){
      console.log(e.target.name)
      console.log(newPokemon.types)
      e.preventDefault();
      setNewPokemon({
         ...newPokemon,
         types: newPokemon.types.filter(type => type !== e.target.name)
      });
   }
   
  return (
      <div >
         {pokemonCreated.name ? 
            <NewPokemon/>
         :
         <div className='container'>
            <img src={background} alt='background form' className='background-image'/>
            <form onSubmit={handleSubmit} className='form-container'>

                  <label className='label-name'>Give me a name! <input 
                  type='text' 
                  name='name' 
                  value={newPokemon.name} 
                  onChange={handleChange} 
                  placeholder='Name...'/></label>
                  
                  {nameFound && nameFound.name !== '' ? <p>This name is already in use, pick another</p> 
                  : null}
                  {errors.name && (<p>{errors.name}</p>)}

                  <label className='label-name'>Stayin’ alive <input type='number'  name='hp' onChange={handleChange} placeholder='HP...'/></label>
                  <label className='label-name'>How strong i'm? <input type='number'  name='attack'  onChange={handleChange} placeholder='Attack...'/></label>
                  <label className='label-name'>Can't mess with me <input type='number' name='defense'  onChange={handleChange} placeholder='Defense...'/></label>
                  <label className='label-name'>I'm this fast! <input type='number'  name='speed'  onChange={handleChange} placeholder='Speed...'/></label>
                  <label className='label-name'>I'm this tall! <input type='number'  name='height'  onChange={handleChange} placeholder='Height...'/></label>
                  <label className='label-name'>I'm this heavy! <input type='number'  name='weight'  onChange={handleChange} placeholder='Weight...'/></label>
                  
                  Choose at least TWO types please!
                  {newPokemon.types.length < 2 ? 
                     <select onChange={(e) => handleSelect(e)} id="select-types"   name='types' className='select-types'>
                         {types.map((e) => (
                           <option  value={e} key={e}>{e}</option>  // genero un tag <option> por cada type
                         ))}
                     </select>
                  :
                  <p>Only two types are allowed</p>
                  }
                  {newPokemon.types?.map((type, i) => <button key={i} name={type} onClick={(e) => handleDeleteSelection(e)}>{type}</button>)}  
                  {errors.types && (<p>{errors.types}</p>)}

                  {newPokemon.name.length === 0 || newPokemon.types.length === 0 ? <button type='submit' disabled >Create Pokemon</button>
                  : <button type='submit'>Create Pokemon</button>
                  } 
               </form>
               
            </div>
         }
         
      </div>
   );
};

export default CreatePokemon;
