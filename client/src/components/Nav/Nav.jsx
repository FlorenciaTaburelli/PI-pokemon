import {React} from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import { Routes, Route } from 'react-router-dom'
import './Nav.css'

function Nav() {
    
    return (
        <header >
            <nav className="navbar">
                <Link to="/home/" className='toHome'>Home</Link>
                <Link to="/createPokemon" className='toCreate'>Create Pokemon</Link>
                <Routes>
                   <Route path = '/home/' element={<SearchPokemon/>} />
                </Routes>  
            </nav>
            <Outlet />
        </header>
    )
};

export default Nav;