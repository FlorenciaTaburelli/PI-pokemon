import axios from 'axios';

// ---------------- GET ALL POKEMONS  ----------------
export function getAllPokemons() {
    return async function (dispatch) {
      try {
          let allPokemons = await axios.get(`http://localhost:3001/pokemons`)
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
  console.log('actions', name);
    return async function (dispatch) {
      try {
          let pokemonByName = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
          return dispatch({
            type: 'GET_POKEMON_BY_NAME',
            payload: pokemonByName.data,
          })
      } catch (error) {
        return alert(`No se encontro el pokemon indicado`);
      }
    };
};

// ---------------- GET POKEMON BY ID ----------------
export function getPokemonById(id) {
    return async function (dispatch) {
      try {
        let pokemonById = await axios.get(`http://localhost:3001/pokemons/${id}`)
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
                                      url: 'http://localhost:3001/pokemons',
                                      data: {newPokemon}
                                    });
                                    console.log(pokemonCreated.data)
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
      let types = await axios.get(`http://localhost:3001/types`)

      return dispatch({
        type: 'GET_TYPES',
        payload: types.data,
      })
    } catch (error) {
      return alert(`No encontramos los types`);
    }
  }
};

export function resetPokemonByName(){
  return{
    type: 'REMOVE_POKEMON'
  }
}

export function resetPokemonById(){
  return{
    type: 'RESET_POKEMON_DETAIL'
  }
}

