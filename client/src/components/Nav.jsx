import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPokemon from './SearchPokemon';
import { Routes, Route } from 'react-router-dom'
import { resetPokemonByName } from '../redux/actions'


function Nav() {
    
  
    return (
        <header className="navbar">
            <nav>
                <Link to="/home/" >Home</Link>
                <Link to="/createPokemon" >Create Pokemon</Link>
                <Routes>
                   <Route path = '/home/' element={<SearchPokemon/>} />
                </Routes>  
            </nav>
            <Outlet />
        </header>
    )
};

export default Nav;