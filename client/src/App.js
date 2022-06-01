import React from "react"
import './App.css';
import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import PokemonDetail from './components/PokemonDetail'
import CreatePokemon from './components/CreatePokemon'
import LandingPage from './components/LandingPage'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>} />
        <Route path="/" element={<Nav/>}>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/pokemons/:id" element={<PokemonDetail/>} />
          <Route exact path="/createPokemon" element={<CreatePokemon/>} />
        </Route>
      </Routes>
    </div>
  );
}
/*
<Nav/>
      <Route exact path='/' component={Home}/>
      <Route path='/product/:id' component={ProductDetail}/>
      <Route path='/products/create' component={CreateProduct}/>
       */
export default App;
