


const initialState = {
    pokemons:[],
    liveSearch: [],
    pokemonByName: {},  // por el momento no lo uso
    pokemonById: {},  // al clickear una card busca por id
    types: [],  // todos los types de pokemons
    newPokemon: {},  // el nuevo pokemon creado
    pokemonsCreated: [],  // filtro de los pokemons creados/originales
    pokemonsInOrder: [], // pokemons ordenados por nombre
    boolean: false
  }
 
  export default function reducer(state= initialState, action){
    //console.log(state.newPokemon)
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
      case 'SEARCH_POKEMON':
        return {
          ...state,
          liveSearch: state.pokemons.filter(poke => poke.name.includes(action.payload))
        };
      case 'FILTER_BY_CREATED':
        console.log(action.payload)
        // console.log(state.pokemons.filter(poke => poke.createdPokemon))
        const filterCreated = action.payload? state.pokemons.filter(poke => poke.createdPokemon) 
                              : state.pokemons.filter(poke => !poke.createdPokemon)
        return{
          ...state,
          pokemonsCreated: filterCreated.length > 0 ? filterCreated : state.pokemons
        };
      case 'RESET_FILTER_BY_CREATED':
        return {
          ...state,
          pokemonsCreated: []
        };
      case 'ORDER_NAME':
        console.log('reducer OrderByName', action.payload)
        return{
          ...state,
          boolean: action.payload
        };
      // case 'RESET_ORDER_BY_NAME':   /// usando otra prop del initialState
      //   return{
      //     ...state,
      //     pokemonsInOrder: []
      //   }
      
      
        default:
          return state;
    }
  }