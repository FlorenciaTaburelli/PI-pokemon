import {React, useEffect} from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import { Routes, Route } from 'react-router-dom'
//import { resetPokemonByName } from '../redux/actions'
import './Nav.css'
import {useDispatch} from "react-redux";
import {getAllPokemons, getTypes} from '../../redux/actions'
import banner from '../../imag/pokemons banner.gif'


function Nav() {
    
    const dispatch = useDispatch();

    useEffect(() => {
      //setLoading(true)
      dispatch(getAllPokemons())
      dispatch(getTypes())
  
      //setLoading(false)
    }, []);
  
    return (
        <header >
            <nav className="navbar">
                <Link to="/home/" className='toHome'>Home</Link>
                <Link to="/createPokemon" className='toCreate'>Create Pokemon</Link>
                <Routes>
                   <Route path = '/home/' element={<SearchPokemon/>} />
                </Routes>  
                <img src={banner} alt='banner' className='banner' />
            </nav>
            <Outlet />
        </header>
    )
};

export default Nav;