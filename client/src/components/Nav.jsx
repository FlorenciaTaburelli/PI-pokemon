import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPokemon from './SearchPokemon';


function Nav() {
   
    return (
        <header className="navbar">
            <nav>
                {/* <button onClick={(e) => handleClick(e)}>Home</button> */}
                <Link to="/home/" >Home</Link>
                <Link to="/createPokemon" >Create Pokemon</Link>
                <SearchPokemon/>  
            </nav>
            <Outlet />
        </header>
    )
};

export default Nav;