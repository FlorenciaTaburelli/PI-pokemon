


const initialState = {
    pokemons:[],
    pokemonByName: {},
    pokemonById: {},
    types: []
  }
 
  export default function reducer(state= initialState, action){
    
    switch(action.type){
      case 'GET_POKEMONS':
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
        console.log(action.payload.types)
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
  
        default:
          return state;
    }
  }