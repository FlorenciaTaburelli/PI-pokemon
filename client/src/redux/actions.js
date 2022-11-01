import axios from 'axios';

const {REACT_APP_API_URL} = process.env

// ---------------- GET ALL POKEMONS  ----------------
export function getAllPokemons() {
    return async function (dispatch) {
      try {
          let allPokemons = await axios.get(`${REACT_APP_API_URL}/pokemons`)
        ///console.log(allPokemons.data);
          return dispatch({
            type: 'GET_POKEMONS',
            payload: allPokemons.data,
          })
      } catch (error) {
        return alert(`No encontramos Pokemons`);
      }
    };
};

// ---------------- GET POKEMON BY NAME ----------------
export function getPokemonByName(name) {
    return async function (dispatch) {
      try {
          let pokemonByName = await axios.get(`${REACT_APP_API_URL}/pokemons?name=${name}`)
          return dispatch({
            type: 'GET_POKEMON_BY_NAME',
            payload: pokemonByName.data,
          })
      } catch (error) {
        return alert(`No se encontro el pokemon indicado`);
      }
    };
};

export function searchPokemon(input){   /// FUNCION BUSQUEDA EN VIVO
  return{
    type: 'SEARCH_POKEMON',
    payload: input
  }
}

// ---------------- GET POKEMON BY ID ----------------
export function getPokemonById(id) {
  
    return async function (dispatch) {
      try {
        let pokemonById = await axios.get(`${REACT_APP_API_URL}/pokemons/${id}`)
        console.log(pokemonById.data)
        return dispatch({
          type: 'GET_POKEMON_DETAIL',
          payload: pokemonById.data,
        })
      } catch (error) {
        return alert(`No encontramos Pokemon con el ID ${id}.`);
      }
    }
};


// ---------------- CREATE POKEMON ----------------
export function createPokemon(newPokemon) {
  console.log(newPokemon)
  return async function (dispatch) {
    try {
      let pokemonCreated = await axios({
                                      method: 'post',
                                      url: `${REACT_APP_API_URL}/pokemons`,
                                      data: newPokemon
                                    });
      return dispatch({
        type: 'POKEMON_POST',
        payload: pokemonCreated.data,
      })
    } catch (error) {
      return alert(`No se pudo crear el pokemon`);
    }
  }
};


// ---------------- GET TYPES ----------------
export function getTypes() {
  
  return async function (dispatch) {
    try {
      let types = await axios.get(`${REACT_APP_API_URL}/types`)

      return dispatch({
        type: 'GET_TYPES',
        payload: types.data,
      })
    } catch (error) {
      return alert(`No encontramos los types`);
    }
  }
};

// ---------------- RESETS ----------------

export function resetPokemonByName(){
  return{
    type: 'RESET_POKEMON_BY_NAME'
  }
}

export function resetPokemonById(){
  return{
    type: 'RESET_POKEMON_DETAIL'
  }
}


export function resetNewPokemon(){
  return{
    type: 'RESET_NEW_POKEMON'
  }
};
