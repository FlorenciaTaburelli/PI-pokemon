
import {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { createPokemon } from '../redux/actions';

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreatePokemon = () => {
   const dispatch = useDispatch();
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

   const [typeSelected, setTypeSelected] = useState([])

useEffect(() => {
setNewPokemon({
        ...newPokemon, types: typeSelected
      })
}, [typeSelected])

   function handleSubmit(e){
      e.preventDefault();
      
      dispatch(createPokemon(newPokemon))
   }
   function handleChange(e){
      setNewPokemon({
         ...newPokemon,
         [e.target.name]: e.target.value
      })
   }

   function handleSelect(e){
    setTypeSelected([...typeSelected, e.target.value])
   }

  
  return (
      <div>
         <form onSubmit={handleSubmit}>
            <label>Name: <input name='name' onChange={handleChange}/></label>
            <label>HP: <input type='number' name='hp' onChange={handleChange}/></label>
            <label>attack: <input type='number' name='attack' onChange={handleChange}/></label>
            <label>Defense: <input type='number' name='defense' onChange={handleChange}/></label>
            <label>Speed: <input type='number' name='speed' onChange={handleChange}/></label>
            <label>Height: <input type='number' name='height' onChange={handleChange}/></label>
            <label>Weight: <input type='number' name='weight' onChange={handleChange}/></label>
           
            <select onChange={(e) => handleSelect(e)} id="select-types" multiple="multiple">
              <option value="normal">Normal</option>
              <option value="fighting">fighting</option>
              <option value="flying">flying</option>
              <option value="poison">poison</option>
              <option value="ground">ground</option>
              <option value="rock">rock</option>
              <option value="bug">bug</option>
              <option value="ghost">ghost</option>
              <option value="steel">steel</option>
              <option value="fire">fire</option>
              <option value="water">water</option>
              <option value="grass">grass</option>
              <option value="electric">electric</option>
              <option value="psychic">psychic</option>
              <option value="ice">ice</option>
              <option value="dragon">dragon</option>
              <option value="dark">dark</option>
              <option value="fairy">fairy</option>
              <option value="unknown">unknown</option>
              <option value="shadow">shadow</option>
            </select>
            <button type='submit'>Create Pokemon</button>
         </form>
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
