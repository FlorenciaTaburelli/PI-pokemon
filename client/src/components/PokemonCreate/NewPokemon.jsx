import React, { useEffect  } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import {resetNewPokemon} from '../../redux/actions'

function NewPokemon() {

   

    return (
     <div>
         <h2>EL POKECAT FUE CREADO CON EXITO! </h2> 
           {/* Falta la tarjeta gigante */}
         <Link to={'/home/'}>Go Home!</Link>
     </div>
    );
}  



export default NewPokemon;

