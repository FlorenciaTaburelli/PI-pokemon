
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPokemon, getTypes } from '../../redux/actions';
import { Widget } from "@uploadcare/react-widget";
import NewPokemon from './NewPokemon';
import validate from './validations';
import './CreatePokemon.css'
import CardDetail from '../CardDetail/CardDetail';
import question from '../../imag/question.png'
//import background from '../../imag/formulario.png'

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
      img: '',
      types: []
   })
console.log(newPokemon)
   const [ errors, setErrors ] = useState({})
   
   const dispatch = useDispatch();
   const types = useSelector((state) => state.types)
   const pokemonCreated = useSelector((state) => state.newPokemon)
   const allPokemons = useSelector((state) => state.pokemons)

  const nameFound = allPokemons.find(p => p.name.toLowerCase() === newPokemon.name.toLowerCase())  // Busco que el nombre ingresado no exista en la lista de pokemones

   useEffect(() => {
      dispatch(getTypes())
   },[dispatch])

   function handleSubmit(e){
      e.preventDefault();
      dispatch(createPokemon(newPokemon))
      // dispatch(getAllPokemons())  // 
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
      const findType = newPokemon.types.find(t => t === e.target.value) /// no repito los types seleccionados
      setNewPokemon({
         ...newPokemon,
        types: findType ? [...newPokemon.types] : [...newPokemon.types, e.target.value]
      });
      setErrors(validate({
         ...newPokemon,
         types: [...newPokemon.types, e.target.value]
      }))
   };

   function handleDeleteSelection(e){  // manejo botones types seleccionados
      e.preventDefault();
      setNewPokemon({
         ...newPokemon,
         types: newPokemon.types.filter(type => type !== e.target.name)  // saco el type seleccionado del arreglo newPokemon.types
      });
   }
   console.log('errores',Object.keys(errors).length)
  return (
      <div className='container-create'>
         {pokemonCreated.name ? 
            <NewPokemon />
         :
            <>
            <form onSubmit={handleSubmit} className='form-container'>
               <div className='container-inputs'>
                  <div className='input-group'>
                  <label className='label-form'>Name:  
                  <input 
                  className='input-form'
                  type='text' 
                  name='name' 
                  value={newPokemon.name} 
                  onChange={handleChange} 
                  placeholder='Name...'/></label>
                  {nameFound && nameFound.name !== '' ? <p className='input-error-msg'>This name is already in use, pick another</p> 
                  : null}
                  {errors.name && (<p className='input-error-msg'>{errors.name}</p>)}

                  <label className='label-form'>Hp:  
                  <input 
                  required
                  className='input-form'
                  type='number'  
                  name='hp' 
                  onChange={handleChange} 
                  placeholder='HP...'/></label>
                  {errors.hp && (<p className='input-error-msg'>{errors.hp}</p>)}

                  <label className='label-form'>Attack:  
                  <input 
                  required
                  className='input-form'
                  type='number'  
                  name='attack'  
                  onChange={handleChange} 
                  placeholder='Attack...'/></label>
                  {errors.attack && (<p className='input-error-msg'>{errors.attack}</p>)}

                  <label className='label-form'>Defense:  
                  <input 
                  required
                  className='input-form'
                  type='number' 
                  name='defense'  
                  onChange={handleChange} 
                  placeholder='Defense...'/></label>
                  {errors.defense && (<p className='input-error-msg'>{errors.defense}</p>)}

                  <label className='label-form'>Speed:  
                  <input 
                  required
                  className='input-form'
                  type='number'  
                  name='speed'  
                  onChange={handleChange} 
                  placeholder='Speed...'/></label>
                  {errors.speed && (<p className='input-error-msg'>{errors.speed}</p>)}

                  <label className='label-form'>Height:  
                  <input 
                  required
                  className='input-form'
                  type='number'  
                  name='height'  
                  onChange={handleChange} 
                  placeholder='Height...'/></label>
                  {errors.height && (<p className='input-error-msg'>{errors.height}</p>)}

                  <label className='label-form'>Weight:  
                  <input 
                  required
                  className='input-form'
                  type='number'  
                  name='weight'  
                  onChange={handleChange} 
                  placeholder='Weight...'/></label>
                  {errors.weight && (<p className='input-error-msg'>{errors.weight}</p>)}
               
                  </div>
                  <Widget
                     publicKey="269841dc43864e62c49d"
                     id="file"
                     name="photos"
                     onChange={(e) => {
                        setNewPokemon({
                           ...newPokemon,
                           img: e.originalUrl
                        })
                     }}
                     />
                    <div className='containet-footer-form'>
                        <div className='container-types'>
                           {newPokemon.types?.map((type, i) => <button className='btn-type' key={i} name={type} onClick={(e) => handleDeleteSelection(e)}>{type}</button>)}  
                           {errors.types && (<p className='type-error-msg'>{errors.types}</p>)}
                        </div>
                        <div className='container-select-types'>
                           {newPokemon.types.length < 2 ? 
                              <select onChange={(e) => handleSelect(e)} id="select-types"  value='' name='types' className='select-types'>
                                 <option value="" disabled hidden>Types</option>
                                 {types.map((e) => (
                                    <option  value={e} key={e}>{e}</option>  // genero un tag <option> por cada type
                                 ))}
                              </select>
                           :
                           <p className='error-select-type'>Only two types are allowed</p>
                           }
                           
                           {Object.keys(errors).length ? <button type='submit' disabled className='btn-form-submit'>Create Pokemon</button>
                           : <button type='submit' className='btn-form-submit'>Create Pokemon</button>
                           } 
                        </div>
                     </div>
                   </div>
               </form>
                  <div className='form-card-detail'>
                     < CardDetail 
                        name={newPokemon.name} 
                        img={question} 
                        speed={newPokemon.speed} 
                        height={newPokemon.height} 
                        weight={newPokemon.weight} 
                        types={newPokemon.types} 
                        attack={newPokemon.attack} 
                        defense={newPokemon.defense} 
                        hp={newPokemon.hp}/>
                  </div>
               </>
         }
         
      </div>
   );
};

export default CreatePokemon;
