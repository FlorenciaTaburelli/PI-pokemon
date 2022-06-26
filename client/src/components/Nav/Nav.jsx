import {React} from 'react';
import { Link, Outlet } from 'react-router-dom';
import SearchPokemon from '../SearchPokemon/SearchPokemon';
import { Routes, Route } from 'react-router-dom'
import './Nav.css'
import logoPoke from '../../imag/logoPoke.png'


function Nav() {
    


    return (
        <header >
            <nav className="navbar">
                <Link to="/home/" className='toHome'>Home</Link>
                <Link to="/about" className='toAbout'>About</Link>
                <Link to="/createPokemon" className='toCreate'>Create Pokemon</Link>
              
                <Routes>
                   <Route path = '/home/' element={<SearchPokemon/>} />  {/* solo se renderiza en la ruta /home */}
                </Routes>  
                <img src={logoPoke} alt='Pokemon Logo' className='logoPoke' />
            </nav>
            <Outlet />
        </header>
    )
};

export default Nav;