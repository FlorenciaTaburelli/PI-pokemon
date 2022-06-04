


const initialState = {
    pokemons:[],
    pokemonByName: {},
    pokemonById: {},
    types: [],
    newPokemon: {}
  }
 
  export default function reducer(state= initialState, action){
    //console.log(state.newPokemon)
    switch(action.type){
      case 'GET_POKEMONS':
        const creados = action.payload.filter(poke => poke.createdPokemon)
        console.log(creados)
        const typePoke = creados.map(c => c.types.map(t => t.name))
        console.log(...typePoke)
        return {
          ...state,
          pokemons: action.payload
        };
      case 'GET_POKEMON_BY_NAME':
        return {
          ...state,
          pokemonByName: action.payload
        };
      case 'REMOVE_POKEMON':
        return{
          ...state,
          pokemonByName: {}
        };
      case 'GET_POKEMON_DETAIL':
        return {
          ...state,
          pokemonById: action.payload
        }
        case 'RESET_POKEMON_DETAIL':
          return{
            ...state,
            pokemonById: {}
          };
      case 'GET_TYPES':
        return{
          ...state,
          types: action.payload
        }
      case 'POKEMON_POST':
        return {
          ...state,
          newPokemon: action.payload
        }
      case 'RESET_NEW_POKEMON':
        return {
          ...state,
          newPokemon: {}
        }
      
        default:
          return state;
    }
  }