


const initialState = {
    pokemons:[],
    liveSearch: [],
    pokemonByName: {},  // busqueda a api
    pokemonById: {},  // al clickear una card busca por id
    types: [],  // todos los types de pokemons
    newPokemon: {},  // el nuevo pokemon creado
  }
 
  export default function reducer(state= initialState, action){
    switch(action.type){
      case 'GET_POKEMONS':
        return {
          ...state,
          pokemons: action.payload
        };
      case 'GET_POKEMON_BY_NAME':   /// BUSQUEDA POR BOTON
     
        return {
          ...state,
          pokemonByName: action.payload
        };
      case 'RESET_POKEMON_BY_NAME':
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
        const typesUpper = action.payload.map(t =>{
          t = t.charAt(0).toUpperCase() + t.slice(1)
          return t
        })
        return{
          ...state,
          types: typesUpper
        }
      case 'POKEMON_POST':
        action.payload.types = action.payload.types.map(t => t.name)
        return {
          ...state,
          newPokemon: action.payload
        }
      case 'RESET_NEW_POKEMON':
        return {
          ...state,
          newPokemon: {}
        }
      case 'SEARCH_POKEMON':   /// BUSQUEDA EN VIVO
        return {
          ...state,
          liveSearch: state.pokemons.filter(poke => poke.name.includes(action.payload))
        };
      
        default:
          return state;
    }
  }